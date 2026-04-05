import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Kedar Developers – Premium Homes in Valsad, South Gujarat",
  description:
    "Kedar Developers builds premium residential projects in Parnera, Pardi, Valsad. 10+ years, 400+ happy families. Explore 2 BHK, 3 BHK apartments and luxury villas.",
  keywords: "Kedar Developers, Valsad homes, Parnera real estate, Pardi apartments, South Gujarat property",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Kedar Developers – Premium Homes in Valsad",
    description: "Building dream homes across South Gujarat since 2014.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}