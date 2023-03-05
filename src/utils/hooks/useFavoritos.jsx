import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarItemFavorito, borrarItemFavorito } from "../../redux/actions";

export const useFavoritos = (producto) => {
  const { favoritos = [], jwt } = useSelector((state) => state);
  const [state, setState] = useState(false);

  useEffect(() => {
    let item = favoritos.find((item) => item.node.id === producto.node.id);

    if (item) {
      setState(true);
    } else {
      setState(false);
    }
  }, [producto]);

  const dispatch = useDispatch();
  const guardar = () => {
    /*  if (!jwt) {
      toastGenerate('Solo puedes agregar a favoritos con una sesion activa');
      return;
    } */

    setState(true);
    dispatch(agregarItemFavorito(producto));
  };
  const eliminar = () => {
    /* if (!jwt) {
      toastGenerate('Solo puedes eliminar favoritos con una sesion activa');
      return;
    } */
    setState(false);
    dispatch(borrarItemFavorito(producto));
  };

  return { eliminar, guardar, state };
};

const styles = StyleSheet.create({});
