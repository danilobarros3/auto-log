import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { initialPartFormValues, partFormSchema } from "@/schema/partsForm.schema";

import api from "@/services";
import { useFormik } from "formik";
import { toast } from "sonner";

interface IPartFormValues {
  partNumber: string;
  name: string;
  quantity: string;
  price: string;
  description: string;
}

export function Parts() {
  const handleFormikCars = useFormik<IPartFormValues>({
    initialValues: initialPartFormValues,
    validationSchema: partFormSchema,
    onSubmit: async (values) => {
      handleSubmitParts(values);
    },
  });

  const handleSubmitParts = async (values: IPartFormValues) => {
    try {
      await api.post("/parts", values);
      toast.success("Peça cadastrada com sucesso!");
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

        <div className="flex flex-col justify-center items-center gap-6 min-h-screen bg-background pb-[40vh]">
          <div className="w-full max-w-xl">
            <form
              onSubmit={handleFormikCars.handleSubmit}
              className="space-y-8"
            >
              <div>
                <h1 className="text-2xl font-bold">
                  Insira as informações da peça a ser registrada!
                </h1>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="name"
                    className="block text-sm font-medium"
                  >
                    Nome
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={handleFormikCars.values.name}
                    onChange={handleFormikCars.handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  {handleFormikCars.errors?.name &&
                    handleFormikCars.touched.name && (
                      <span className="text-red-500">
                        {handleFormikCars.errors.name}
                      </span>
                    )}
                </div>

                <div>
                  <Label
                    htmlFor="partNumber"
                    className="block text-sm font-medium"
                  >
                    Número da peça
                  </Label>
                  <Input
                    type="text"
                    id="partNumber"
                    name="partNumber"
                    value={handleFormikCars.values.partNumber}
                    onChange={handleFormikCars.handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  {handleFormikCars.errors?.partNumber &&
                    handleFormikCars.touched.partNumber && (
                      <span className="text-red-500">
                        {handleFormikCars.errors.partNumber}
                      </span>
                    )}
                </div>

                <div>
                  <Label htmlFor="description" className="block text-sm font-medium">
                    Descrição 
                  </Label>
                  <Input
                    type="text"
                    id="description"
                    name="description"
                    value={handleFormikCars.values.description}
                    onChange={handleFormikCars.handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  {handleFormikCars.errors?.description &&
                    handleFormikCars.touched.description && (
                      <span className="text-red-500">
                        {handleFormikCars.errors.description}
                      </span>
                    )}
                </div>

                <div>
                  <Label htmlFor="quantity" className="block text-sm font-medium">
                    Quantidade
                  </Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    value={handleFormikCars.values.quantity}
                    onChange={handleFormikCars.handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  ></Input>
                  {handleFormikCars.errors?.quantity &&
                    handleFormikCars.touched.quantity && (
                      <span className="text-red-500">
                        {handleFormikCars.errors.quantity}
                      </span>
                    )}
                </div>

                <div>
                  <Label
                    htmlFor="price"
                    className="block text-sm font-medium"
                  >
                    Preço
                  </Label>
                  <Input
                    type="text"
                    id="price"
                    name="price"
                    value={handleFormikCars.values.price}
                    onChange={handleFormikCars.handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  {handleFormikCars.errors?.price &&
                    handleFormikCars.touched.price && (
                      <span className="text-red-500">
                        {handleFormikCars.errors.price}
                      </span>
                    )}
                </div>
              </div>

              <div className="mt-10">
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
