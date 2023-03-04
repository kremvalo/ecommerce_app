import { handleSubmit } from "../Controllers";
import { getAllCategories } from "../redux/actions";

const getCategories = `
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
      getCategories,
      {},
      {}
    );

    if (productCategories) {
      const categories = productCategories.nodes;
      dispatch(getAllCategories(categories));
    }

  } catch (error) {
    throw new Error('No se pueden traer las categorias');
  }
}


export default startGetAllCategories;