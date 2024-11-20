import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ReactNode } from "react";
import { roboto } from "@/src/components/ui/font";
import "./global.css";
import Header from "@/src/components/pagelayout/header";
import Footer from "@/src/components/pagelayout/footer";

export const metadata = {
  title: "aion®",
  description: "Maquila de suplementos alimenticios de gran calidad y eficacia",
  keywords: [
    "suplementos alimenticios",
    "maquila de suplementos",
    "productos de alta calidad",
    "eficacia en suplementos",
  ],
  openGraph: {
    title: "aion®",
    description:
      "Maquila de suplementos alimenticios de gran calidad y eficacia",
    images: ["/Logotipo_AION2bco.png"],
    locale: "es_MX",
    type: "website",
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
