import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UiProvider from "../components/UiProvider";

export const metadata = {
  title: "Hamro Digital Studio",
  description:
    "Soft cinematic photography and videography for weddings, engagements, receptions, and pre wedding stories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UiProvider>
          <Navbar />
          {children}
          <Footer />
        </UiProvider>
      </body>
    </html>
  );
}
