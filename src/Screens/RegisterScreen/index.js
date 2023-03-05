import * as Yup from "yup";

export const filterConst = {
  CLIENT: 'cliente',
  BUSINESS: 'negocio',
}

export const documentTypes = [
  { label: "Cedula", value: "1" },
  { label: "Tarjeta de identidad", value: "2" },
]

export const initialValues = {
  nombres: "",
  apellido: "",
  nit: "",
  documento: "",
  documentType: "",
  correo: "",
  phone: '',
  password: "",
};

export const LoginSchema = Yup.object().shape({
  nombres: Yup.string().required("Campo requerido"),
  apellido: Yup.string().required("Campo requerido"),
  documento: Yup.string().required("Campo requerido"),
  documentType: Yup.string().required("Campo requerido"),
  phone: Yup.string().required("Campo requerido"),
  correo: Yup.string().email("Email no es valido").required("Campo requerido"),
  password: Yup.string().min(2, "Contraseña muy corta").required("Campo requerido"),
});
