import axios from "axios";
import { URL_API } from "@env";

import { handleSubmit } from "../Controllers";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataCategorias,
  setDataMarcas,
  setDataTiposDePiel,
} from "../redux/actions";

const queryCategorias = `
query NewQuery {
  productCategories {
   nodes {
     id
     parentId
     name
     image {
       sourceUrl
     }
     camposcategoria {
      bannerDeCategoria {
        sourceUrl
      }
    }


     children {
       nodes {
         parentId
         name
         id
        
       }
     }
   }
 }
 allPaMarca {
  nodes {
    name
    id
    slug
    camposTaxonomia {
      image {
        sourceUrl
        link
      }
    }
  }
}
 allPaTiposDePiel {
  nodes {
    id
    name
    slug
  }
}
}
  `;

export default async function dataResponse(dispatch) {
  try {
    let categorias_atributos = await handleSubmit(
      "GET",
      queryCategorias,
      {},
      {}
    );

    if (categorias_atributos) {
      let { nodes: categorias } = categorias_atributos.data.productCategories;
      let { nodes: marca } = categorias_atributos.data.allPaMarca;
      let { nodes: tipos_piel } = categorias_atributos.data.allPaTiposDePiel;

      categorias = categorias.filter((el) => el.parentId === null);
      dispatch(setDataCategorias(categorias));
      dispatch(setDataMarcas(marca));
      dispatch(setDataTiposDePiel(tipos_piel));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
