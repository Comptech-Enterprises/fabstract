import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { EnquireTab } from "@/components/EnquireTab";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Fabstract Clothing India Pvt. Ltd. | Ethical Garment Export House",
  description:
    "Government recognized garment export house manufacturing & exporting high fashion knitwear & woven garments to USA, Canada and Europe since 1991.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-cream text-stone">
        <ScrollProgress />
        {children}
        <EnquireTab />
        <WhatsAppButton />
      </body>
    </html>
  );
}
