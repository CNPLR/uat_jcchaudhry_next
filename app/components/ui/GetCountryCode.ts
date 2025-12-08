"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export const CountryIPaddress = (): string => {
  const [countryIp, setCountryIp] = useState<string>("");

  useEffect(() => {
    const getCountryCode = async () => {
      try {
        const res = await axios.get("https://ipinfo.io/json");
        setCountryIp(res.data?.country?.toLowerCase() || "");
      } catch (error) {
        console.error("Country IP fetch failed:", error);
      }
    };

    getCountryCode();
  }, []);

  return countryIp;
};
