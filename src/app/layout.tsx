import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabstract Clothing India Pvt. Ltd. | Ethical Garment Export House",
  description:
    "Government recognized garment export house manufacturing & exporting high fashion knitwear & woven garments to USA, Canada and Europe since 1991.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
