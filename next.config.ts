import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'fr'], // Langues supportées
    defaultLocale: 'fr', // Langue par défaut
  },
  /* config options here */
};

export default nextConfig;
