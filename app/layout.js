import { Noto_Sans } from "next/font/google";
import "material-symbols"
import "./globals.css";
import { CookiesProvider } from "next-client-cookies/server";
import CookieConsent from "./components/Cookies";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const openGraphImage = { images: ['./images/logo_mail.png'] }
export const metadata = {
  openGraph: {
    ...openGraphImage,
  },
  title: "Yo Soy Bienestar",
  description: "¡Obtén gigas gratis y conserva tu mismo número!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} antialiased`}
      >
        <CookiesProvider>
          {children}
          <CookieConsent />
        </CookiesProvider>
      </body>
    </html>
  );
}
