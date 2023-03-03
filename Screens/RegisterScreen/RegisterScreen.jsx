import React, { useState } from "react";
import { useFormik } from "formik";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles } from "./styles";
import Button from "./components/Button";
import { documentTypes, filterConst, initialValues, LoginSchema } from ".";

import { handleSubmit } from "../../Controllers";
import { PhoneField, SelectField, TextField } from "../../Components";

import { role } from "../../utils/const";
import { colores as colors } from "../../utils/material";

const logoClient = "../../assets/LogoRojo.png";
const logoBusiness = "../../assets/modalnegocio.png";

export default function RegisterScreen({ navigation, route }) {
  const { filter } = route.params;

  const [documentType, setDocumentType] = useState("");
  const [showPassword, handleShowPassword] = useState(true);
  const [disableButton, handleDisableButton] = useState(false);

  const {
    values,
    errors,
    touched,
    handleChange,
    setFieldValue,
    handleSubmit: onSubmitForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values) => submitForm(values),
  });

  //querys para graphl
  const REGISTER_USER = `
  mutation registerCustomerUser {
    registerCustomer(
      input: {
        username: "${values.correo}",
        email: "${values.correo}",
        shipping: {phone: "${values.telefono}",   firstName:"${values.nombres}",},
        billing: {phone: "${values.telefono}",   firstName:"${values.nombres}",},
        password: "${values.password}"}
    ) {
      customer {
        email
      }
    }
  }
  `;

  const REGISTER_BUSINESS = `
  mutation registerBusiness {
    registerBusiness(
      input: {
        username: "${values.correo}",
        email: "${values.correo}",
        shipping: {phone: "${values.telefono}",   firstName:"${values.nombres}", company:"${values.nit}"},
        billing: {phone: "${values.telefono}",   firstName:"${values.nombres}",company:"${values.nit}"},
        password: "${values.password}"}
    ) {
      customer {
        email
      }
    }
  }
  `;

  // sumbit
  const submitForm = async (formValues) => {
    const { nombres, correo, password, nit, telefono } = formValues;
    handleDisableButton(true);
    try {
      const response = await handleSubmit(
        "POS",
        filter === role.CLIENT ? REGISTER_USER : REGISTER_BUSINESS,
        errors,
        filter === role.CLIENT
          ? { nombres, correo, password }
          : { nombres, correo, password, nit, telefono }
      );
      if (response) {
        navigation.replace("ConfirmacionRegistro");
      }
    } catch (error) {
      throw new Error("No se pudo crear el usuario");
    } finally {
      handleDisableButton(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.box}>
        <Image
          style={styles.imageLogo}
          source={
            filter === filterConst.CLIENT
              ? require(logoClient)
              : require(logoBusiness)
          }
        />
      </View>
      <View style={styles.mainWrapper}>
        <TextField
          name="nombres"
          label="Nombre"
          placeholder="Nombres"
          value={values.nombres}
          error={errors.nombres}
          touched={touched.nombres}
          onChangeText={handleChange("nombres")}
        />
        <TextField
          name="apellido"
          label="Apellido"
          placeholder="Apellido"
          value={values.apellido}
          error={errors.apellido}
          touched={touched.apellido}
          onChangeText={handleChange("apellido")}
        />
        <SelectField
          items={documentTypes}
          label="Tipo de documento"
          error={errors.documentType}
          touched={touched.documentType}
          onValueChange={(event) => {
            setDocumentType(event);
            setFieldValue("documentType", event);
          }}
        />
        <TextField
          name="documento"
          label="Número de documento"
          placeholder="Número de documento"
          value={values.documento}
          error={errors.documento}
          touched={touched.documento}
          onChangeText={handleChange("documento")}
        />
        {filter === role.BUSINESS && (
          <TextField
            name="nit"
            label="Nit"
            placeholder="Nit"
            value={values.nit}
            error={errors.nit}
            touched={touched.nit}
            onChangeText={handleChange("nit")}
          />
        )}
        <PhoneField
          name="phone"
          value={values.phone}
          error={errors.phone}
          touched={touched.phone}
          placeholder="(300)123-4567"
          onChangeText={handleChange("phone")}
        />
        <View style={styles.separator} />
        <TextField
          name="correo"
          label="Email"
          placeholder="Email"
          value={values.correo}
          error={errors.correo}
          touched={touched.correo}
          onChangeText={handleChange("correo")}
        />
        <TextField
          isPassword
          name="password"
          label="Contraseña"
          value={values.password}
          error={errors.password}
          touched={touched.password}
          secureTextEntry={showPassword}
          placeholder="Escribe tu contraseña"
          iconColor={
            filter === filterConst.CLIENT
              ? colors.primary
              : colors.colorBusiness
          }
          onChangeText={handleChange("password")}
          onPress={() => handleShowPassword(!showPassword)}
        />
        <Button
          disabled={disableButton}
          isClient={filter === role.CLIENT}
          onPress={onSubmitForm}
        />
        <View style={styles.separator} />
        <View style={styles.viewLogin}>
          <Text style={styles.textLogin}>¿Ya tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text
              style={[
                styles.textR,
                {
                  color:
                    filter === role.CLIENT
                      ? colors.primary
                      : colors.colorBusiness,
                },
              ]}
            >
              Iniciar sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
