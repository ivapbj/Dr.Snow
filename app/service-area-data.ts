export const serviceAreas = {
  "springfield-ma": {
    city: "Springfield",
    region: "Massachusetts",
    title: "Residential Snow Removal in Springfield, MA",
    description: "Residential driveway snow removal and optional ice control in Springfield, Massachusetts, including selected neighborhoods across the city.",
    intro: "Dr. Snow provides route-based residential snow removal in Springfield, with each address reviewed before enrollment. Service is designed for homeowners who want dependable storm monitoring, a clear service trigger, and secure billing through Square.",
    localDetails: "Springfield properties vary widely in driveway length, width, grade, parking layout, and access. Dr. Snow reviews the submitted address and may request a driveway photo before confirming the driveway classification and route availability.",
    communities: ["Sixteen Acres", "East Forest Park", "Pine Point", "Boston Road", "East Springfield", "Forest Park", "Indian Orchard"],
  },
  "wilbraham-ma": {
    city: "Wilbraham",
    region: "Massachusetts",
    title: "Residential Snow Removal in Wilbraham, MA",
    description: "Residential driveway snow removal and optional ice control for approved addresses in Wilbraham, Massachusetts.",
    intro: "Dr. Snow serves approved residential routes in Wilbraham with seasonal membership and pay-per-storm options. Customers submit their property information first, and Dr. Snow confirms the driveway size, service fit, and available route capacity.",
    localDetails: "Wilbraham homes may have longer driveways, wider parking areas, slopes, or access conditions that affect the service classification. A property review helps keep the published pricing accurate and prevents customers from selecting the wrong driveway size.",
    communities: ["Wilbraham residential routes", "Approved nearby properties", "Greater Springfield service corridor"],
  },
  "east-longmeadow-ma": {
    city: "East Longmeadow",
    region: "Massachusetts",
    title: "Residential Snow Removal in East Longmeadow, MA",
    description: "Route-based residential snow removal and optional ice control for approved East Longmeadow, Massachusetts properties.",
    intro: "East Longmeadow homeowners can request seasonal or pay-per-storm residential snow removal from Dr. Snow. Every address is reviewed before service is confirmed so the property can be placed on the correct route and pricing tier.",
    localDetails: "Driveway layouts differ from property to property. Dr. Snow may ask for a photo to review width, length, obstacles, grade, and safe equipment access before approving the service request and sending the secure Square enrollment link.",
    communities: ["East Longmeadow residential routes", "Approved nearby properties", "Greater Springfield service corridor"],
  },
  "longmeadow-ma": {
    city: "Longmeadow",
    region: "Massachusetts",
    title: "Residential Snow Removal in Longmeadow, MA",
    description: "Residential driveway snow removal and optional ice control for approved properties in Longmeadow, Massachusetts.",
    intro: "Dr. Snow offers route-based residential snow removal for approved Longmeadow properties. Customers can review the published seasonal and pay-per-storm pricing before submitting an address for classification and route approval.",
    localDetails: "The property review accounts for driveway size, parking layout, steps, walkway access, obstructions, and conditions that may affect safe service. Dr. Snow confirms the classification before the customer receives a secure Square payment or enrollment link.",
    communities: ["Longmeadow residential routes", "Approved nearby properties", "Greater Springfield service corridor"],
  },
} as const;

export type ServiceAreaSlug = keyof typeof serviceAreas;

