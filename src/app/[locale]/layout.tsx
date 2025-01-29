import type { Metadata } from "next";
import { Alexandria, Archivo, Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from "@/components/theme-provider";
// import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivoBlack",
  subsets: ["latin"],
  weight: "400"
});

const alexandria = Alexandria({
  variable: '--font-alexandria',
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Blog",
  description: "Creer un blog en next js",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Modification ici
}) {

  // Résoudre la promesse pour obtenir les paramètres
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // Assurez-vous que la locale est valide
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  // Fournir tous les messages au client
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`
          ${archivo.variable} 
          ${inter.variable} 
          ${archivoBlack.variable}
          ${alexandria.variable}
          antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
