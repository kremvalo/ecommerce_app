import { useFormik } from "formik";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles } from "./styles";
import { documentType, filterConst, initialValues, LoginSchema } from ".";

import { PhoneField, SelectField, TextField } from "../../Components";
import { handleSubmit } from "../../Controllers";
import ButtonComponent from "../../Components/ButtonComponent";

const logoVherona = "../../assets/LogoRojo.png";

export default function RegisterScreen({ navigation, route }) {
  const { filter } = route.params;

  const [disableButton, handleDisableButton] = useState(false);

  const {
    values,
    errors,
    touched,
    handleChange,
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
  const submitForm = async () => {
    const { nombres, correo, password, nit, telefono } = values;
    handleDisableButton(true);
    try {
      const response = await handleSubmit(
        "POS",
        filter === filterConst.CLIENT ? REGISTER_USER : REGISTER_BUSINESS,
        errors,
        filter === filterConst.CLIENT
          ? { nombres, correo, password }
          : { nombres, correo, password, nit, telefono }
      );
      if (response) {
        navigation.replace("ConfirmacionRegistro");
      }
      handleDisableButton(false);
    } catch (error) {
      throw new Error("No se pudo crear el usuario");
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.box}>
        <Image style={styles.imageLogo} source={require(logoVherona)} />
      </View>
      <View style={styles.mainWrapper}>
        <TextField
          name="nombres"
          label="Nombre"
          placeholder="Nombres"
          value={values.nombres}
          error={errors.nombres}
          touched={touched.nombres}
          // onSubmitEditing={() => apellido.current?.focus()}
          onChangeText={handleChange("nombres")}
        />
        <TextField
          name="apellido"
          label="Apellido"
          placeholder="Apellido"
          value={values.apellido}
          error={errors.apellido}
          touched={touched.apellido}
          // onSubmitEditing={() => lastName.current?.focus()}
          onChangeText={handleChange("apellido")}
        />
        <SelectField items={documentType} />
        {filter === filterConst.BUSINESS && (
          <TextField
            name="nit"
            label="Nit"
            placeholder="Nit"
            value={values.nit}
            error={errors.nit}
            touched={touched.nit}
            // onSubmitEditing={() => lastName.current?.focus()}
            onChangeText={handleChange("nit")}
          />
        )}
        <TextField
          name="correo"
          label="Correo"
          placeholder="Correo"
          value={values.correo}
          error={errors.correo}
          touched={touched.correo}
          // onSubmitEditing={() => lastName.current?.focus()}
          onChangeText={handleChange("correo")}
        />
        <PhoneField
          name="phone"
          value={values.phone}
          error={errors.phone}
          touched={touched.phone}
          placeholder="322 290 9237"
          // onSubmitEditing={() => lastName.current?.focus()}
          onChangeText={handleChange("phone")}
        />
        <TextField
          name="password"
          label="Contraseña"
          secureTextEntry={true}
          value={values.password}
          error={errors.password}
          placeholder="Contraseña"
          touched={touched.password}
          // onSubmitEditing={() => name.current?.focus()}
          onChangeText={handleChange("password")}
        />
        <ButtonComponent
          type="rojo"
          size="medium"
          rounded="large"
          label="Continuar"
          onPress={onSubmitForm}
          buttonDisabled={disableButton}
          style={{ marginTop: hp(2) }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textR}>Atras</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}
