import { handleSubmit } from "../Controllers";
import { getBannerInfo } from "../redux/actions";

const bannersInfo = `
  query banners_app {
    post(id: "cG9zdDo4MDIw") {
      title
      Medios_Banners {
        grupoMedios {
          mediaItemUrl
        }
      }
    }
  }
`;

const startGetBannerInfo = async (dispatch) => {
  try {
    const { data: { post } } = await handleSubmit(
      "GET",
      bannersInfo,
      {},
      {}
    );

    if (post) {
      const banners = post.Medios_Banners.grupoMedios;
      dispatch(getBannerInfo(banners));
    }
  } catch (error) {
    throw new Error('No se pueden traer los productos');
  }
}


export default startGetBannerInfo;