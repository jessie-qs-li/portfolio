"use client"

import { GlobeLabels } from "@/components/ui/cobe-globe-labels"

const travelMarkers = [
  // North America
  { id: "label-1",  location: [40.71, -74.01]   as [number, number], text: "New York",      color: "#f4a261", rotate: 4 },
  { id: "label-7",  location: [34.05, -118.24]  as [number, number], text: "LA",             color: "#457b9d", rotate: -6 },
  { id: "label-9",  location: [19.43, -99.13]   as [number, number], text: "Mexico City",   color: "#d4a373", rotate: 3 },
  { id: "label-11", location: [41.88, -87.63]   as [number, number], text: "Chicago",       color: "#f4a261", rotate: -4 },
  { id: "label-12", location: [43.65, -79.38]   as [number, number], text: "Toronto",       color: "#e76f51", rotate: 5 },
  { id: "label-13", location: [37.77, -122.42]  as [number, number], text: "San Francisco", color: "#457b9d", rotate: -3 },
  { id: "label-14", location: [25.76, -80.19]   as [number, number], text: "Miami",         color: "#e84855", rotate: 6 },
  { id: "label-15", location: [38.89, -77.04]   as [number, number], text: "Washington DC", color: "#9d4edd", rotate: -5 },
  { id: "label-16", location: [49.25, -123.12]  as [number, number], text: "Vancouver",     color: "#2a9d8f", rotate: 4 },
  { id: "label-17", location: [29.76, -95.37]   as [number, number], text: "Houston",       color: "#d4a373", rotate: -3 },

  // Europe
  { id: "label-1e", location: [48.86, 2.35]     as [number, number], text: "Paris",         color: "#e84855", rotate: -8 },
  { id: "label-5e", location: [51.51, -0.13]    as [number, number], text: "London",        color: "#7b2cbf", rotate: -5 },
  { id: "label-10e", location: [41.01, 28.96]   as [number, number], text: "Istanbul",      color: "#9d4edd", rotate: 6 },
  { id: "label-18", location: [41.90, 12.50]    as [number, number], text: "Rome",          color: "#e76f51", rotate: -4 },
  { id: "label-19", location: [41.39, 2.15]     as [number, number], text: "Barcelona",     color: "#e84855", rotate: 3 },
  { id: "label-20", location: [52.37, 4.90]     as [number, number], text: "Amsterdam",     color: "#2a9d8f", rotate: -6 },
  { id: "label-21", location: [52.52, 13.40]    as [number, number], text: "Berlin",        color: "#7b2cbf", rotate: 5 },
  { id: "label-22", location: [48.21, 16.37]    as [number, number], text: "Vienna",        color: "#f4a261", rotate: -3 },
  { id: "label-23", location: [50.08, 14.44]    as [number, number], text: "Prague",        color: "#9d4edd", rotate: 4 },
  { id: "label-24", location: [47.38, 8.54]     as [number, number], text: "Zurich",        color: "#457b9d", rotate: -7 },
  { id: "label-25", location: [43.30, 5.37]     as [number, number], text: "Marseille",     color: "#e63946", rotate: 2 },
  { id: "label-26", location: [55.75, 37.62]    as [number, number], text: "Moscow",        color: "#d4a373", rotate: -5 },

  // Asia
  { id: "label-2a", location: [35.68, 139.65]   as [number, number], text: "Tokyo",         color: "#2a9d8f", rotate: 5 },
  { id: "label-3a", location: [31.23, 121.47]   as [number, number], text: "Shanghai",      color: "#e76f51", rotate: -3 },
  { id: "label-4a", location: [1.35, 103.82]    as [number, number], text: "Singapore",     color: "#e63946", rotate: -4 },
  { id: "label-27", location: [39.91, 116.39]   as [number, number], text: "Beijing",       color: "#e84855", rotate: -6 },
  { id: "label-28", location: [22.33, 114.17]   as [number, number], text: "Hong Kong",     color: "#9d4edd", rotate: 3 },
  { id: "label-29", location: [37.57, 126.98]   as [number, number], text: "Seoul",         color: "#2a9d8f", rotate: -4 },
  { id: "label-30", location: [13.75, 100.52]   as [number, number], text: "Bangkok",       color: "#f4a261", rotate: 5 },
  { id: "label-31", location: [25.04, 121.56]   as [number, number], text: "Taipei",        color: "#e76f51", rotate: -3 },
  { id: "label-32", location: [34.69, 135.50]   as [number, number], text: "Osaka",         color: "#457b9d", rotate: 6 },
  { id: "label-33", location: [3.14, 101.69]    as [number, number], text: "Kuala Lumpur",  color: "#e63946", rotate: -5 },
  { id: "label-34", location: [28.61, 77.21]    as [number, number], text: "Delhi",         color: "#d4a373", rotate: 4 },

  // Australia (existing)
  { id: "label-8",  location: [-33.87, 151.21]  as [number, number], text: "Sydney",        color: "#264653", rotate: 7 },
]

export default function TravelGlobe() {
  return (
    <GlobeLabels
      markers={travelMarkers}
      speed={0.004}
      dark={0.3}
      className="w-full mt-3"
    />
  )
}
