import * as yup from "yup";

export const partFormSchema = yup.object().shape({
  partNumber: yup.string().required("O número da peça é obrigatório"),
  name: yup.string().required("O nome é obrigatório"),
  quantity: yup.string().required("O número da peça é obrigatório"),
  price: yup.string().required("O preço é obrigatório"),
  description: yup.string().required("A descrição é obrigatória"),
});

export const initialPartFormValues = {
  partNumber: "",
  name: "",
  quantity: "",
  price: "",
  description: "",
};
