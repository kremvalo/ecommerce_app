import axios from "axios";
import { URL_API } from "@env";
import { toastGenerate } from "../utils/ToastGenerate";
export const handleChange = (
  e,
  validate,
  callback,
  errorName,
  callbackError,
  error,
  extra
) => {
  callback(e);
  validate(e, extra)
    ? callbackError({ ...error, [errorName]: false })
    : callbackError({
        ...error,
        [errorName]: true,
      });
};

export const handleSubmit = async (
  method = "",
  query,

  errors,
  validate = {},
  token
) => {
  try {
    switch (method) {
      case "GET":
        console.log(token);
        const response_get = await axios.post(
          URL_API,
          {
            query,
          },
          {
            headers: { Authorization: token ? "Bearer " + token : "" },
          }
        );

        if (response_get.data.errors) {
          toastGenerate(response_get.data.errors[0]["message"]);

          return null;
        }

        return response_get.data;

        break;
      case "PUT":
        break;

      case "POS":
        for (const error in errors) {
          if (errors[error]) {
            toastGenerate(
              `Por favor revisa la adveretencia del campo ${error}`
            );

            return null;
          }
        }
        for (const campo in validate) {
          if (!validate[campo]) {
            toastGenerate(`El campo  ${campo} es obligatorio`);

            return null;
          }
        }

        const response = await axios.post(
          URL_API,
          {
            query,
          },

          {
            headers: { Authorization: token ? "Bearer " + token : "" },
          }
        );

        if (response.data.errors) {
          console.log(JSON.stringify(response.data.errors));
          toastGenerate(response.data.errors[0]["message"]);

          return null;
        }

        return response.data;

        break;
    }
  } catch (error) {
    return null;
  }
};
