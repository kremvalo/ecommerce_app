import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { colores } from "../material";
import { useState } from "react";

export default function useColors() {
  const [colorApp, setColorApp] = useState(colores.primary);
  const { data } = useSelector((state) => state);

  useEffect(() => {
    if (data.role === "business") {
      setColorApp(colores.secondary);
    } else {
      setColorApp(colores.primary);
    }
  }, [data]);

  return { colorApp };
}
