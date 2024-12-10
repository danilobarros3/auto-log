import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import api from "@/services";
import { Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface IVehicle {
  idCar: number;
  ownerName: string;
  carBrand: string;
  model: string;
  color: string;
  licencePlate: string;
  chassisNumber: string;
}

export function TableVehicles() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    ownerName: "",
    licencePlate: "",
  });
  const [loading, setLoading] = useState(false);

  const getAllVehicles = async () => {
    setLoading(true);
    try {
      const response = await api.get<IVehicle[]>("/users/1/cars");
      setVehicles(response.data);
    } catch (error) {
      console.error("Erro ao buscar veículos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllVehicles();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredVehicles = vehicles.filter((vehicle) => {
    return (
      (filters.ownerName === "" ||
        vehicle.ownerName
          .toLowerCase()
          .includes(filters.ownerName.toLowerCase())) &&
      (filters.licencePlate === "" ||
        vehicle.licencePlate
          .toLowerCase()
          .includes(filters.licencePlate.toLowerCase()))
    );
  });

  const deleteVehicle = async (idCar: number) => {
    try {
      await api.delete(`/users/1/cars/${idCar}`);
      setVehicles(vehicles.filter((vehicle) => vehicle.idCar !== idCar));
      toast.success("Veículo excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir veículo:", error);
      toast.error("Falha ao excluir veículo. Tente novamente!");
    }
  };

  return (
    <div className="bg-background flex flex-col justify-center w-full rounded-2xl shadow-lg p-5">
      <div
        className="flex gap-4 items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className="flex items-center justify-center">
          {isOpen ? (
            <div className="bg-background border border-gray-300 rounded-full p-1">
              <Minus className="h-6 w-6 text-gray-500" />
            </div>
          ) : (
            <div className="bg-background border border-gray-400 rounded-full p-1">
              <Plus className="h-6 w-6 text-gray-500" />
            </div>
          )}
        </button>
        <div className="flex flex-1 justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Veículos</h2>
            <p className="text-sm text-foreground mb-2">
              Lista de veículos cadastrados
            </p>
          </div>
          <a href="/register">
            <Button className="bg-primary text-background rounded-md px-4 py-2 shadow-md hover:bg-blue-600">
              Novo Veículo
            </Button>
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="mt-6">
          <div className="flex gap-6 mb-6">
            <input
              type="text"
              name="ownerName"
              placeholder="Filtrar por Proprietário"
              className="border border-gray-300 p-2 rounded-md w-1/4"
              value={filters.ownerName}
              onChange={handleFilterChange}
            />
            <input
              type="text"
              name="licencePlate"
              placeholder="Filtrar por Placa"
              className="border border-gray-300 p-2 rounded-md w-1/4"
              value={filters.licencePlate}
              onChange={handleFilterChange}
            />
          </div>

          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableHead>Proprietário</TableHead>
                <TableHead>Marca</TableHead>
                <TableHead>Modelo</TableHead>
                <TableHead>Placa</TableHead>
                <TableHead>Chassi</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    Carregando...
                  </TableCell>
                </TableRow>
              ) : filteredVehicles.length > 0 ? (
                filteredVehicles.map((vehicle) => (
                  <TableRow key={vehicle?.idCar}>
                    <TableCell>{vehicle?.idCar}</TableCell>
                    <TableCell>{vehicle?.ownerName}</TableCell>
                    <TableCell>{vehicle?.carBrand}</TableCell>
                    <TableCell>{vehicle?.model}</TableCell>
                    <TableCell>{vehicle?.licencePlate}</TableCell>
                    <TableCell>{vehicle?.chassisNumber}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => deleteVehicle(vehicle.idCar)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    Nenhum veículo encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
