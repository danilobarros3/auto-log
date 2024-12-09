import * as yup from "yup";

export const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  cnpj: yup.string().required("Cnpj é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
  nameWorkshop: yup.string().required("Nome da oficina é obrigatório"),
  addressWorkshop: yup.string().required("Endereço da oficina é obrigatório"),
});

export const initialCreateUserFormValues = {
  email: "",
  password: "",
  name: "",
  phone: "",
  cnpj: "",
  nameWorkshop: "",
  addressWorkshop: ""
}
