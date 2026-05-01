import "./globals.css";
import Footer from "../components/Footer";
import MobileActionBar from "../components/MobileActionBar";
import Navbar from "../components/Navbar";
import UiProvider from "../components/UiProvider";

export const metadata = {
  title: "Hamro Digital Studio",
  description:
    "Soft cinematic photography and videography for weddings, engagements, receptions, and pre wedding stories.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        <UiProvider>
          <Navbar />
          {children}
          <Footer />
          <MobileActionBar />
        </UiProvider>
      </body>
    </html>
  );
}
