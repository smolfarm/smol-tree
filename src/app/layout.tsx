import type { Metadata } from "next"
import "./globals.css"
import configuration from "../../linkconfig.json"

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
                className={`antialiased ${configuration.background.color ?? "bg-slate-900"}`}
            >
        {children}
      </body>
    </html>
  );
}
