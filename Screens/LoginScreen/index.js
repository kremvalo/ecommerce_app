import * as Yup from "yup";

export const initialValues = {
  correo: "",
  password: "",
};

export const LoginSchema = Yup.object().shape({
  correo: Yup.string().email("Email no es valido").required("Campo requerido"),
  password: Yup.string().min(2, "Contraseña muy corta").required("Campo requerido"),
});
