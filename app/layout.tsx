import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "@/components/v2/SiteHeader";
import SiteFooter from "@/components/v2/SiteFooter";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const BASE_URL = "https://vetssi.com";

const DESCRIPTION =
  "An independent educational resource for veterinary surgical teams. The Mosaic of SSI Prevention organises surgical site infection prevention into four stages and twelve core protocols, with the practices, checklists, roles and audit questions to implement them.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "VetSSI — The Mosaic of SSI Prevention",
    template: "%s | VetSSI",
  },
  description: DESCRIPTION,
  keywords: [
    "veterinary surgical site infection",
    "SSI prevention",
    "veterinary surgery protocols",
    "perioperative infection control",
    "veterinary aseptic technique",
    "SSI surveillance",
  ],
  authors: [{ name: "VetSSI" }],
  creator: "VetSSI",
  verification: {
    google: "k0FA6zqwmkpSKdmfQ1e-gFIFgdFptCcSVJ5NTaVmWvI",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "VetSSI",
    title: "VetSSI — The Mosaic of SSI Prevention",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "VetSSI — The Mosaic of SSI Prevention",
    description:
      "Four stages, twelve protocols, and the practices that implement them. An independent educational resource for veterinary surgical teams.",
  },
  // Kept in step with app/robots.ts: a non-canonical deploy of draft clinical
  // content is not indexable.
  robots:
    process.env.VETSSI_INDEXABLE === "true"
      ? {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        }
      : { index: false, follow: false },
  alternates: {
    canonical: BASE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VetSSI",
  url: BASE_URL,
  description:
    "An independent educational resource for veterinary surgical site infection prevention.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VetSSI",
  url: BASE_URL,
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
