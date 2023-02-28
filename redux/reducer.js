import {
  CAMBIAR_SUBCATEGORIAS,
  SET_CARRITO,
  SET_DATA_CATEGORIAS,
  SET_DATA_USER,
  SET_JWT,
  SET_DATA_MARCA,
  SET_DATA_TIPOS_DE_PIEL,
  SET_VIEWER,
  SET_CANTIDAD_CARRITO,
  BORRAR_ITEM_CARRITO,
  AGREGAR_ITEM_FAVORITO,
  BORRAR_ITEM_FAVORITO,
  CLEAN_CARRITO,
  SET_CATEGORIES,
} from "./actions";

const initialState = {
  data: {},
  jwt: "",
  subCategorias: [],
  tituloSubCategoria: "",
  categorias: [],
  categories: [],
  carrito: [],
  marcas: [],
  tipos_de_piel: [],
  viewer: {},
  favoritos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAMBIAR_SUBCATEGORIAS: {
      return {
        ...state,
        subCategorias: action.payload.categoria,
        tituloSubCategoria: action.payload.title,
      };
    }

    case SET_DATA_USER: {
      return {
        ...state,
        data: action.payload,
      };
    }

    case SET_JWT: {
      return {
        ...state,
        jwt: action.payload,
      };
    }

    case SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }

    case SET_DATA_CATEGORIAS: {
      return {
        ...state,
        categorias: action.payload,
      };
    }

    case SET_DATA_MARCA: {
      return {
        ...state,
        marcas: action.payload,
      };
    }

    case SET_DATA_TIPOS_DE_PIEL: {
      return {
        ...state,
        tipos_de_piel: action.payload,
      };
    }

    case SET_VIEWER: {
      return {
        ...state,
        viewer: action.payload,
      };
    }

    case SET_CANTIDAD_CARRITO: {
      let item;
      let aux = state.carrito.map((e) => {
        if (e.node.id === action.payload.id) {
          e.cantidad = action.payload.cantidad;
          return e;
        }
        return e;
      });

      return { ...state, carrito: aux };
    }
    case BORRAR_ITEM_CARRITO: {
      let aux = state.carrito.filter((e) => e.node.id !== action.payload);

      return { ...state, carrito: aux };
    }

    case CLEAN_CARRITO: {
      return { ...state, carrito: [] };
    }

    case SET_CARRITO: {
      let flag = false;
      if (state.carrito.length < 1)
        return { ...state, carrito: [...state.carrito, action.payload.item] };

      let arr = state.carrito.map((item) => {
        if (item.node.id === action.payload.item.node.id) {
          item.cantidad = item.cantidad + action.payload.item.cantidad;
          flag = true;
          return item;
        }
        return item;
      });
      if (!flag) {
        return { ...state, carrito: [...state.carrito, action.payload.item] };
      } else {
        return { ...state, carrito: arr };
      }
    }

    case AGREGAR_ITEM_FAVORITO: {
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload],
      };
    }

    case BORRAR_ITEM_FAVORITO: {
      let borrar = state.favoritos.filter(
        (item) => item.node.id !== action.payload.node.id
      );

      return { ...state, favoritos: borrar };
    }

    default:
      return state;
  }
};

export default rootReducer;
