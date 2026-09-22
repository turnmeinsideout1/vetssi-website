import { buildRedirects } from "./content/redirects.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return buildRedirects();
  },
};

export default nextConfig;
