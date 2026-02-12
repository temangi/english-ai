"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
}

interface TelegramContextType {
  user: TelegramUser | null;
  tg: any;
}

const TelegramContext = createContext<TelegramContextType>({
  user: null,
  tg: null,
});

export const useTelegram = () => useContext(TelegramContext);

export const TelegramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [tg, setTg] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const telegram = window.Telegram.WebApp;

      telegram.ready();
      telegram.expand();

      setTg(telegram);

      const tgUser = telegram.initDataUnsafe?.user;

      if (tgUser) {
        setUser(tgUser);
      }
    }
  }, []);

  return (
    <TelegramContext.Provider value={{ user, tg }}>
      {children}
    </TelegramContext.Provider>
  );
};
