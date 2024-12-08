import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { carFormSchema, initialCarFormValues } from "@/schema/carForm.schema";

import api from "@/services";
import { useFormik } from "formik";
import { toast } from "sonner";

interface ICarFormValues {
  ownerName: string;
  carBrand: string;
  model: string;
  color: string;
  licencePlate: string;
  chassisNumber: string;
}

export function RegisterCar() {
  const handleFormikCars = useFormik<ICarFormValues>({
    initialValues: initialCarFormValues,
    validationSchema: carFormSchema,
    onSubmit: async (values) => {
      handleSubmitCar(values);
    },
  });

  const handleSubmitCar = async (values: ICarFormValues) => {
    try {
      const id = 3;
      await api.post(`/users/${id}/cars`, values);
      toast.success("Carro cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Falha ao cadastrar, tente novamente!");
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header
          companyName="Minha Oficina"
          pageTitle="Dashboard"
          avatarSrc={null}
        />

        <div className="flex flex-col items-center gap-6 min-h-screen bg-background p-6">
          <div className="w-full max-w-xl">
            <form
              onSubmit={handleFormikCars.handleSubmit}
              className="space-y-4"
            >
              <div>
                <h1 className="text-2xl font-bold">
                  Insira as informações do veículo a ser registrado!
                </h1>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="ownerName"
                    className="block text-sm font-medium"
                  >
                    Nome do Proprietário
                  </Label>
                  <Input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    value={handleFormikCars.values.ownerName}
                    onChange={handleFormikCars.handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  {handleFormikCars.errors?.ownerName &&
                    handleFormikCars.touched.ownerName && (
                      <span className="text-red-500">
                        {handleFormikCars.errors.ownerName}
                      </span>
                    )}
                </div>

                <div>
                  <Label htmlFor="carBrand" className="block text-sm font-medium">
                    Marca do Carro
                  </Label>
                  <Input
                    type="text"
                    id="carBrand"
                    name="carBrand"
                    value={handleFormikCars.values.carBrand}
                    onChange={handleFormikCars.handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  {handleFormikCars.errors?.carBrand &&
                    handleFormikCars.touched.carBrand && (
                      <span className="text-red-500">
                        {handleFormikCars.errors.carBrand}
                      </span>
                    )}
                </div>

                <div>
                  <Label htmlFor="model" className="block text-sm font-medium">
                    Modelo
                  </Label>
                  <Input
                    type="text"
                    id="model"
                    name="model"
                    value={handleFormikCars.values.model}
                    onChange={handleFormikCars.handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  {handleFormikCars.errors?.model &&
                    handleFormikCars.touched.model && (
                      <span className="text-red-500">
                        {handleFormikCars.errors.model}
                      </span>
                    )}
                </div>

                <div>
                  <Label htmlFor="color" className="block text-sm font-medium">
                    Cor
                  </Label>
                  <Input
                    id="color"
                    name="color"
                    value={handleFormikCars.values.color}
                    onChange={handleFormikCars.handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  >
                  </Input>
                  {handleFormikCars.errors?.color &&
                    handleFormikCars.touched.color && (
                      <span className="text-red-500">
                        {handleFormikCars.errors.color}
                      </span>
                    )}
                </div>

                <div>
                  <Label
                    htmlFor="licencePlate"
                    className="block text-sm font-medium"
                  >
                    Placa
                  </Label>
                  <Input
                    type="text"
                    id="licencePlate"
                    name="licencePlate"
                    value={handleFormikCars.values.licencePlate}
                    onChange={handleFormikCars.handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  {handleFormikCars.errors?.licencePlate &&
                    handleFormikCars.touched.licencePlate && (
                      <span className="text-red-500">
                        {handleFormikCars.errors.licencePlate}
                      </span>
                    )}
                </div>

                <div>
                  <Label
                    htmlFor="chassisNumber"
                    className="block text-sm font-medium"
                  >
                    Número do Chassi
                  </Label>
                  <Input
                    type="text"
                    id="chassisNumber"
                    name="chassisNumber"
                    value={handleFormikCars.values.chassisNumber}
                    onChange={handleFormikCars.handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  {handleFormikCars.errors?.chassisNumber &&
                    handleFormikCars.touched.chassisNumber && (
                      <span className="text-red-500">
                        {handleFormikCars.errors.chassisNumber}
                      </span>
                    )}
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
