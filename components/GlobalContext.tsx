"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

type globalContextType = {
  activeNavItem: string;
  setActiveNavItem: Function;
};

const globalContextDefaults: globalContextType = {
  activeNavItem: "/dashboard",
  setActiveNavItem: () => {
  },
};

export const GlobalContext = createContext<globalContextType>(
  globalContextDefaults
);

export function useGlobalContext() {
  return useContext(GlobalContext);
}

type Props = {
  children: ReactNode;
};

export function GlobalContextProvider({children}: Props) {
  const [activeNavItem, setActiveNavItem] = useState("/dashboard");

  const value = {
    activeNavItem,
    setActiveNavItem,
  };
  return (
    <>
      <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    </>
  );
}

export default GlobalContextProvider;
