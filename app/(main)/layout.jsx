import { Roboto, Roboto_Condensed } from "next/font/google";
import { Footer, Navbar, Squiggles } from "@/components";
import { ModalProvider } from "@/hooks/useModal";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'], variable: "--font-roboto" });
const robotoCondensed = Roboto_Condensed({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-roboto-condensed' });

const MainLayout = ({ children }) => {
  return (
    <ModalProvider>
      <body className={`${roboto.className} ${roboto.variable} ${robotoCondensed.variable} bg-background text-white md:text-body text-[16px] flex flex-col min-h-screen`}>
        <Squiggles />
        <Navbar />
        {children}
        <Footer />
      </body>
    </ModalProvider>
  )
}

export default MainLayout