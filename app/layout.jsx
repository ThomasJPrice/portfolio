import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });
const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], weight: ['400', '500', '600', '700']})

export const metadata = {
  title: "Thomas Price",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-background text-white text-body`}>{children}</body>
    </html>
  );
}
