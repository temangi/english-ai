"use client";

import { useTelegram } from "@/components/Telegram/TelegramProvider";

export default function Home() {
  const { user } = useTelegram();

  return (
    <main style={{ padding: "20px" }}>
      {user ? (
        <>
          <h1>Hello, {user.first_name} 👋</h1>
          <p>Welcome to Talkora AI</p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
}
