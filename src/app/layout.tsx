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
    "Maquila de suplementos alimenticios de gran clalidad y eficacia",
};

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${roboto.className} bg-gray-50`}>
        {/* <div className="bg-top bg-[url('/home-bg.png')] bg-no-repeat bg-cover">
        </div> */}
        <NextIntlClientProvider messages={messages}>
          <Header></Header>
          {children}
          <Footer></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
