import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "@/app/globals.css";
import { ThemeProvider } from "@/useContext/ThemeContext";

export const metadata: Metadata = {
  title: "Skillnet Exam Hub",
  description: "Decentralized",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
