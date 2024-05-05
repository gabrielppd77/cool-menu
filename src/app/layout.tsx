import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Lili Grill",
  description: "Lili Grill churrascaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
