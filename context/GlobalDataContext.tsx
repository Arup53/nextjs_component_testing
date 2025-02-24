"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const GlobalDataContext = createContext<any>(null);

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return <div></div>;
};

export default GlobalProvider;
