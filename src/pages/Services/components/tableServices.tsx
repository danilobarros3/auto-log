import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import api from "@/services";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface IService {
  idMaintenance: number;
  serviceDescription: string;
  serviceStatus: string;
  repairDate: string;
  serviceValue: number;
}

function getStatusColor(status: string) {
  switch (status) {
    case "Em andamento":
      return "bg-yellow-500 text-white"; // Amarelo
    case "Concluido":
      return "bg-green-500 text-white"; // Verde
    case "Ativo":
      return "bg-sky-500 text-white"; // Sky
    case "Cancelado":
      return "bg-red-500 text-white"; // Vermelho
    case "Inativo":
      return "bg-orange-500 text-white"; // Laranja
    default:
      return "bg-gray-200 text-gray-800"; // Cor padrão
  }
}

export function TableService({
  title,
  subtitle,
}: {
  column1?: string;
  column2?: string;
  column3?: string;
  column4?: string;
  column5?: string;
  column6?: string;
  column7?: string;
  column8?: string;
  title?: string;
  subtitle?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    licencePlate: "",
    status: "",
    date: "",
  });
  const [services, setServices] = useState<IService[]>([]);

  const toggleAccordion = () => setIsOpen(!isOpen);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const getAllServices = async () => {
    try {
      const { data } = await api.get(`/users/1/cars/1/maintenance`);
      setServices(data);
      toast.success("Serviços carregados com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Falha ao carregar os serviços. Tente novamente!");
    }
  };

  useEffect(() => {
    getAllServices();
  }, []);

  const filteredServices = services.filter((service) => {
    return (
      (filters.status === "" ||
        service.serviceStatus
          .toLowerCase()
          .includes(filters.status.toLowerCase())) &&
      (filters.date === "" || service.repairDate.includes(filters.date))
    );
  });

  const deleteService = async (serviceId: number) => {
    try {
      const userId = 1; 
      const carId = 1; 
      await api.delete(`/users/${userId}/cars/${carId}/maintenance/${serviceId}`);
      setServices(services.filter((service) => service.idMaintenance !== serviceId));
      toast.success("Serviço excluído com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Falha ao excluir o serviço. Tente novamente!");
    }
  };

  return (
    <div className="bg-background flex flex-col justify-center w-full rounded-2xl shadow-lg p-5">
      <div
        className="flex gap-4 items-center cursor-pointer"
        onClick={toggleAccordion}
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
            <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
            <p className="text-sm text-foreground mb-2">{subtitle}</p>
          </div>
          <a href="/register">
            <Button className="bg-primary text-background rounded-md px-4 py-2 shadow-md hover:bg-blue-600">
              Novo Serviço
            </Button>
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="mt-6">
          <div className="flex gap-6 mb-6">
            <select
              name="status"
              className="border border-gray-300 p-2 rounded-md w-1/4"
              value={filters.status}
              onChange={handleFilterChange}
            >
              <option value="">Filtrar por Status</option>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
              <option value="Em andamento">Em andamento</option>
              <option value="Concluido">Concluído</option>
              <option value="Cancelado">Cancelado</option>
            </select>
            <input
              type="date"
              name="date"
              className="border border-gray-300 text-foreground p-2 rounded-md w-1/4"
              value={filters.date}
              onChange={handleFilterChange}
            />
          </div>

          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableCell>Nº Serviço</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Data</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredServices.map((service) => (
                <TableRow key={service.idMaintenance}>
                  <TableCell>{service.idMaintenance}</TableCell>
                  <TableCell>{service.serviceDescription}</TableCell>
                  <TableCell>
                    <span className={`py-1 px-3 rounded-full ${getStatusColor(service.serviceStatus)}`}>
                      {service.serviceStatus}
                    </span>
                  </TableCell>
                  <TableCell>{`R$ ${service.serviceValue.toFixed(
                    2
                  )}`}</TableCell>
                  <TableCell>{service.repairDate}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      onClick={() => deleteService(service.idMaintenance)}
                      className="bg-red-500 text-white hover:bg-red-600"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
