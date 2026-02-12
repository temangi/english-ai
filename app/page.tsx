"use client";

import { useTelegram } from "@/components/Telegram/TelegramProvider";

export default function Home() {
  const { user } = useTelegram();

  return (
    <div>
      {user ? (
        <>
          <h1>Hello, {user.first_name} 👋</h1>
          <p>Let’s practice English today!</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
