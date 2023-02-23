import { handleSubmit } from "../Controllers";

const getAllCategories = `
  query NewQuery {
    productCategories(where: {parent: 0}) {
      nodes {
        id
        name
        slug
        uri
        image {
          mediaItemUrl
        }
      }
    }
  }
`;

const startGetAllCategories = async (dispatch) => {

  try {
    const { data: { productCategories } } = await handleSubmit(
      "GET",
      getAllCategories,
      {},
      {}
    );

    if (productCategories) {
      const categories = productCategories.nodes;
      // dispatch(setDataCategorias(categorias));
    }

  } catch (error) {
    throw new Error('No se pueden traer las categorias');
  }
}


export default startGetAllCategories;