/**
 * JessieBot conversation logger.
 *
 * Setup, once:
 *   1. Make a Google Sheet. Extensions > Apps Script. Replace everything with this file.
 *   2. Set SECRET below to any random string.
 *   3. Deploy > New deployment > Web app.
 *        Execute as: Me
 *        Who has access: Anyone
 *      Copy the /exec URL it gives you.
 *   4. In Vercel > Settings > Environment Variables, add:
 *        SHEET_WEBHOOK_URL    = the /exec URL
 *        SHEET_WEBHOOK_SECRET = the same SECRET
 *      Redeploy.
 *
 * "Anyone" only means anyone may POST to the URL; the sheet itself stays private.
 * The secret is what stops a stranger who finds the URL from writing junk rows.
 */

const SECRET = "CHANGE_ME";

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    if (SECRET !== "CHANGE_ME" && body.secret !== SECRET) {
      return ContentService.createTextOutput("no");
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Time", "Turn", "Question", "Answer"]);
      sheet.getRange("A1:D1").setFontWeight("bold");
      sheet.setFrozenRows(1);
      sheet.setColumnWidth(1, 160);
      sheet.setColumnWidth(2, 55);
      sheet.setColumnWidth(3, 320);
      sheet.setColumnWidth(4, 620);
    }

    sheet.appendRow([
      new Date(body.at || Date.now()),
      body.turn || "",
      body.question || "",
      body.answer || "",
    ]);
    // Keep rows readable rather than one tall wrapped block.
    sheet.getRange(sheet.getLastRow(), 1, 1, 4).setVerticalAlignment("top");

    return ContentService.createTextOutput("ok");
  } catch (err) {
    return ContentService.createTextOutput("err: " + err);
  }
}
