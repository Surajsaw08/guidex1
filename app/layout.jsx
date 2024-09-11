import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GuideX",
  description: "Mentor connect",
};
const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Nav />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer></Footer>
    </body>
  </html>
);

export default RootLayout;
