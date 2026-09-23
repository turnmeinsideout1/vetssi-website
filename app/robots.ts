import type { MetadataRoute } from "next";

/**
 * V2 is deployed to its own Netlify site while the clinical content is still
 * under expert review. A draft clinical resource should not be indexed, and it
 * must not compete with vetssi.com in search results, so any deploy that is
 * not the canonical domain disallows crawling entirely.
 *
 * Set VETSSI_INDEXABLE=true on the deploy that serves the canonical domain.
 */
const indexable = process.env.VETSSI_INDEXABLE === "true";

export default function robots(): MetadataRoute.Robots {
  if (!indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://vetssi.com/sitemap.xml",
  };
}
