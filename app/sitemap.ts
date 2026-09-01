import type { MetadataRoute } from "next";
import { serviceAreas } from "./service-area-data";

const baseUrl = "https://drsnowma.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/plans`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/prepare-for-snow-removal`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.4 },
  ];

  const areaPages: MetadataRoute.Sitemap = Object.keys(serviceAreas).map((slug) => ({
    url: `${baseUrl}/service-areas/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...areaPages];
}

