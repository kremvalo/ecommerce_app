import { handleSubmit } from "../Controllers";
import { getOfferProducts } from "../redux/actions";

const offerProducts = `
  query NewQuery {
  products(first: 6) {
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

const startGetOfferProducts = async (dispatch) => {

  try {
    const { data: { products } } = await handleSubmit(
      "GET",
      offerProducts,
      {},
      {}
    );

    if (products) {
      const offerProducts = products.nodes;
      dispatch(getOfferProducts(offerProducts));
    }

  } catch (error) {
    throw new Error('No se pueden traer los productos');
  }
}


export default startGetOfferProducts;