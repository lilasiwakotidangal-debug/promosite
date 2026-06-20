import "./globals.css";
import { Playfair_Display, Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RouteTransition from "../components/RouteTransition";
import UiProvider from "../components/UiProvider";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-label",
  display: "swap",
});

export const metadata = {
  title: "Hamro Digital Studio",
  description:
    "Soft cinematic photography and videography for weddings, engagements, receptions, and pre wedding stories.",
};

export default function RootLayout({ children }) {
  const fontClassName = `${playfairDisplay.variable} ${sourceSerif.variable} ${plusJakartaSans.variable}`;

  return (
    <html lang="en" className={fontClassName}>
      <body>
        <UiProvider>
          <Navbar />
          <RouteTransition />
          {children}
          <Footer />
        </UiProvider>
      </body>
    </html>
  );
}
