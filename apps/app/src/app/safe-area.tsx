"use client";

import { SafeArea as CapacitorSafeArea } from "@capacitor-community/safe-area";

import { useEffect } from "react";

export const SafeArea = () => {
  useEffect(() => {
    CapacitorSafeArea.enable({ config: {} });
  }, []);

  return null;
};
