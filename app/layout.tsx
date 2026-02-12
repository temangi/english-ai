import "./globals.scss";
import Script from "next/script";
import { TelegramProvider } from "@/components/Telegram/TelegramProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />

        <TelegramProvider>
          {children}
        </TelegramProvider>
      </body>
    </html>
  );
}
