import type { Metadata } from "next"
import "./globals.css"
import configuration from "./configuration.json"

export const metadata: Metadata = {
  title: configuration.title,
  description: configuration.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
