import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Footer, Navbar, Squiggles } from "@/components";
import { ModalProvider } from "@/hooks/useModal";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });
const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata = {
  title: "Thomas Price",
  description: "I'm an aspiring Software Engineer with a strong passion for building web applications with great user experiences.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <ModalProvider>
        <body className={`${roboto.className} bg-background text-white md:text-body text-[16px] flex flex-col min-h-screen`}>
          <Squiggles />

          <Navbar />
          {children}
          <Footer />
        </body>
      </ModalProvider>
    </html>
  );
}
