import type { MetadataRoute } from "next";
import { protocols } from "@/content/protocols";
import { stages } from "@/content/stages";
import { coreDefinitions } from "@/data/ssi-definitions";

const BASE_URL = "https://vetssi.com";

const staticRoutes: MetadataRoute.Sitemap = ([
  { url: BASE_URL, changeFrequency: "weekly", priority: 1.0 },
  { url: `${BASE_URL}/mosaic`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/protocols`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE_URL}/roles`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/ssi-definitions`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE_URL}/ssi-definitions/core`, changeFrequency: "weekly", priority: 0.85 },
  { url: `${BASE_URL}/ssi-definitions/wound-classification`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/ssi-definitions/surveillance`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/resources`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/resources/glossary`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE_URL}/resources/references`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE_URL}/contributors`, changeFrequency: "monthly", priority: 0.5 },
] satisfies MetadataRoute.Sitemap).map((route) => ({
  ...route,
  lastModified: new Date(),
}));

const stageRoutes: MetadataRoute.Sitemap = stages.map((stage) => ({
  url: `${BASE_URL}/pathway/${stage.slug}`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.85,
}));

const protocolRoutes: MetadataRoute.Sitemap = protocols.map((p) => ({
  url: `${BASE_URL}/protocols/${p.slug}`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
}));

const definitionRoutes: MetadataRoute.Sitemap = coreDefinitions.map((d) => ({
  url: `${BASE_URL}/ssi-definitions/core/${d.slug}`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.85,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes,
    ...stageRoutes,
    ...protocolRoutes,
    ...definitionRoutes,
  ];
}
