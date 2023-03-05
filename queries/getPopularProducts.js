import { handleSubmit } from "../Controllers";
import { getPopularProducts } from "../redux/actions";

const popularProducts = `
  query NewQuery {
  products(first: 6, where: {orderby: {field: TOTAL_SALES}}) {
    nodes {
      id
      name
      sku
      onSale
      shortDescription
      image {
        sourceUrl
      }
      attributes {
        nodes {
          options
        }
      }
      preciosNegocio {
        precioOfertaNegocio
        precioRegularNegocio
      }
      ... on SimpleProduct {
        price
        regularPrice
        salePrice
      }
    }
  }
}
`;

const startGetPopularProducts = async (dispatch) => {

  try {
    const { data: { products } } = await handleSubmit(
      "GET",
      popularProducts,
      {},
      {}
    );

    if (products) {
      const popularProducts = products.nodes;
      dispatch(getPopularProducts(popularProducts));
    }

  } catch (error) {
    throw new Error('No se pueden traer los productos');
  }
}


export default startGetPopularProducts;