import type { Metadata } from "next";
import { Alexandria, Archivo, Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';


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
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body
        className={`
          ${archivo.variable} 
          ${inter.variable} 
          ${archivoBlack.variable}
          ${alexandria.variable}
          antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
