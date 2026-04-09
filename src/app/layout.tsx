import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Niyya Safar — De l'intention au voyage",
  description:
    "Association 1901 qui finance les pèlerinages Hajj et Omra de musulmans franciliens en situation de précarité. 100% transparent, 0% commission.",
  keywords: ["hajj", "omra", "pèlerinage", "islam", "don", "association", "solidarité", "île-de-france"],
  openGraph: {
    title: "Niyya Safar — De l'intention au voyage",
    description: "Finançons ensemble le voyage spirituel de ceux qui en rêvent depuis des décennies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${cormorant.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
