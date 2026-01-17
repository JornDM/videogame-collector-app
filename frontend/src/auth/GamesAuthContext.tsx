import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { GamesApiAuth } from "./gamesApiAuth";

type GamesAuthContextType = {
  igdbToken: string | null;
  loading: boolean;
};

const GamesAuthContext = createContext<GamesAuthContextType | undefined>(
  undefined
);

export const GamesAuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, loading: authLoading } = useAuth();
  const [igdbToken, setIgdbToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setIgdbToken(null);
      setLoading(false);
      return;
    }

    const fetchToken = async () => {
      try {
        const token = await GamesApiAuth();
        setIgdbToken(token);
      } catch (err) {
        console.error("Failed to fetch IGDB token", err);
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, [user, authLoading]);

  return (
    <GamesAuthContext.Provider value={{ igdbToken, loading }}>
      {children}
    </GamesAuthContext.Provider>
  );
};

export const useGamesAuth = () => {
  const context = useContext(GamesAuthContext);
  if (!context) {
    throw new Error("useGamesAuth must be used within GamesAuthProvider");
  }
  return context;
};
