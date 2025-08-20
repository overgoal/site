import type { Metadata } from "next";
import { Chakra_Petch, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import ShaderBackground from "@/components/shader-background";
import localFont from "next/font/local";

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const airStrike = localFont({
  src: "../airstrike.ttf",
  variable: "--font-air-strike",
  display: "swap",
  weight: "400",
  style: "normal",
});

const airStrikeBold = localFont({
  src: "../airstrikebold.ttf",
  variable: "--font-air-strike-bold",
  display: "swap",
  weight: "700",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Overgoal",
  description: "Overgoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chakra.variable} ${orbitron.variable} ${airStrike.variable} ${airStrikeBold.variable}  antialiased`}>
        <ShaderBackground>
          {/* <Header /> */}
            {children}
        </ShaderBackground>
      </body>
    </html>
  );
}
