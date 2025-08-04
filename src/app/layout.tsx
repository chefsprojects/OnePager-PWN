import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Act binnen PWN: Organisatiebrede Implementatie",
  description: "De AI Act is Europese wetgeving die kaders stelt voor het veilig en verantwoord gebruik van AI-systemen binnen PWN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
      </head>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
