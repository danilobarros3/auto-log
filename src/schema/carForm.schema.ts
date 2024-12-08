import * as yup from "yup";

export const carFormSchema = yup.object().shape({
  ownerName: yup.string().required("Nome é obrigatório"),
  carBrand: yup.string().required("Marca é obrigatório"),
  model: yup.string().required("Modelo é obrigatório"),
  color: yup.string().required("Cor é obrigatório"),
  licencePlate: yup.string().required("Placa é obrigatório"),
  chassisNumber: yup.string().required("Chassis é obrigatório"),
});

export const initialCarFormValues = {
  ownerName: "",
  carBrand: "",
  model: "",
  color: "",
  licencePlate: "",
  chassisNumber: "",
}
