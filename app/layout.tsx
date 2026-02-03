import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adi Debel - Product Leader & AI Builder",
  description: "Product Leader building enterprise AI agents and developer platforms at scale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
