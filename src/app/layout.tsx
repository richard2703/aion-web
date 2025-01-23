import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ReactNode } from "react";
import { roboto } from "@/src/components/ui/font";
import "./global.css";
import Header from "@/src/components/pagelayout/header";
import Footer from "@/src/components/pagelayout/footer";

export const metadata = {
  title: "aion®",
  description:
    "Con más de 30 años de experiencia. Nuestro compromiso se centra en desarrollar productos de alta calidad y eficacia, adaptados a las necesidades de tu producto.",
  keywords: [
    "aion",
    "suplementos",
    "maquila",
    "calidad",
    "producción",
    "fabricación",
    "nutrición",
    "naturista",
  ],
  openGraph: {
    title: "aion®",
    description:
      "Con más de 30 años de experiencia. Nuestro compromiso se centra en desarrollar productos de alta calidad y eficacia, adaptados a las necesidades de tu producto.",
    images: [
      {
        url: "/Logotipo_AION2bco.png",
        width: 1200,
        height: 630,
        alt: "Logo de aion",
      },
    ],
    locale: "es_MX",
    type: "website",
    site_name: "aion",
  },
};

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Basic SEO */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content="aion®" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://aionsuplementos.com" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width.toString()}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height.toString()}
        />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${roboto.className} bg-gray-50`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
