export const CAMBIAR_SUBCATEGORIAS = "CAMBIAR_SUBCATEGORIAS";
export const SET_JWT = "SET_JWT";
export const SET_DATA_USER = "SET_DATA_USER";
export const SET_DATA_CATEGORIAS = "SET_DATA_CATEGORIAS";
export const SET_CARRITO = "SET_CARRITO";
export const SET_DATA_MARCA = "SET_DATA_MARCA";
export const SET_DATA_TIPOS_DE_PIEL = "SET_DATA_TIPOS_DE_PIEL";
export const SET_VIEWER = "SET_VIEWER";
export const SET_CANTIDAD_CARRITO = "SET_CANTIDAD_CARRITO";
export const BORRAR_ITEM_CARRITO = "BORRAR_ITEM_CARRITO";
export const BORRAR_ITEM_FAVORITO = "BORRAR_ITEM_FAVORITO";
export const AGREGAR_ITEM_FAVORITO = "AGREGAR_ITEM_FAVORITO";
export const CLEAN_CARRITO = "CLEAN_CARRITO";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_POPULAR_PRODUCTS = "SET_POPULAR_PRODUCTS";
export const SET_BANNERS = "SET_BANNERS";
export const SET_OFFER_PRODUCTS = "SET_OFFER_PRODUCTS";

export function cambiarSubCategorias(subCategorias) {
  return {
    type: CAMBIAR_SUBCATEGORIAS,
    payload: subCategorias,
  };
}

export function setJwt(jwt) {
  return {
    type: SET_JWT,
    payload: jwt,
  };
}
export function setDataUser(data) {
  return {
    type: SET_DATA_USER,
    payload: data,
  };
}

export function setDataCategorias(data) {
  return {
    type: SET_DATA_CATEGORIAS,
    payload: data,
  };
}
export function setDataMarcas(data) {
  return {
    type: SET_DATA_MARCA,
    payload: data,
  };
}
export function setDataTiposDePiel(data) {
  return {
    type: SET_DATA_TIPOS_DE_PIEL,
    payload: data,
  };
}
export function setCarrito(item, tipo) {
  return {
    type: SET_CARRITO,
    payload: { item, tipo },
  };
}
export function setViewer(item) {
  return {
    type: SET_VIEWER,
    payload: item,
  };
}

export function setCantidadCarrito(data) {
  return {
    type: SET_CANTIDAD_CARRITO,
    payload: data,
  };
}
export function borrarItemCarrito(id) {
  return {
    type: BORRAR_ITEM_CARRITO,
    payload: id,
  };
}
export function borrarItemFavorito(id) {
  return {
    type: BORRAR_ITEM_FAVORITO,
    payload: id,
  };
}

export function agregarItemFavorito(data) {
  return {
    type: AGREGAR_ITEM_FAVORITO,
    payload: data,
  };
}

export function cleanCarrito(data) {
  return {
    type: CLEAN_CARRITO,
    payload: data,
  };
}

export function getAllCategories(data) {
  return {
    type: SET_CATEGORIES,
    payload: data,
  };
}

export function getPopularProducts(data) {
  return {
    type: SET_POPULAR_PRODUCTS,
    payload: data,
  };
}

export function getBannerInfo(data) {
  return {
    type: SET_BANNERS,
    payload: data,
  };
}

export function getOfferProducts(data) {
  return {
    type: SET_OFFER_PRODUCTS,
    payload: data,
  };
}
