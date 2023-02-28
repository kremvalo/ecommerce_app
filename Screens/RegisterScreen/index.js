import * as Yup from "yup";

export const initialValues = {
  nombres: "",
  apellido: "",
  nit: "",
  document: "",
  correo: "",
  phone: '',
  password: "",
};

export const LoginSchema = Yup.object().shape({
  nombres: Yup.string().required("Campo requerido"),
  apellido: Yup.string().required("Campo requerido"),
  nit: Yup.string().required("Campo requerido"),
  document: Yup.string().required("Campo requerido"),
  phone: Yup.string().required("Campo requerido"),
  correo: Yup.string().email("Email no es valido").required("Campo requerido"),
  password: Yup.string()
    .min(2, "Contraseña muy corta")
    .required("Campo requerido"),
});

export const filterConst = {
  CLIENT: 'cliente',
  BUSINESS: 'negocio',
}

export const documentType = [
  { label: "Cedula", value: "1" },
  { label: "Tarjeta de identidad", value: "2" },
]