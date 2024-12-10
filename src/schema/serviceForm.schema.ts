import * as yup from "yup";

export const serviceFormSchema = yup.object().shape({
  serviceDescription: yup.string().required("Descrição é obrigatório"),
  serviceStatus: yup.string().required("Status é obrigatório"),
  repairDate: yup.string().required("Data é obrigatório"),
  serviceValue: yup.string().required("Valor é obrigatório"),
});

export const initialServiceFormValues = {
  serviceDescription: "",
  serviceStatus: "",
  repairDate: "",
  serviceValue: "",
}
