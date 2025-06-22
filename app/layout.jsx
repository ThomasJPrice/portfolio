import "./globals.css";

export const metadata = {
  title: "Thomas Price",
  description: "I'm an aspiring Software Engineer with a strong passion for building web applications with great user experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {children}
    </html>
  );
}
