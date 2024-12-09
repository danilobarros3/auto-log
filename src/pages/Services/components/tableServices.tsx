import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const services = [
    {
        id: "S001",
        ownerName: "John Clinton",
        carBrand: "Toyota",
        model: "Corolla",
        color: "Red",
        licencePlate: "ABC1234",
        chassisNumber: "1335567890",
        serviceDescription: "Substituição das pastilhas de freio",
        serviceStatus: "Em andamento",
        repairDate: "2024-04-10",
        serviceValue: "R$ 250,00",
    },
    {
        id: "S002",
        ownerName: "Mary Smith",
        carBrand: "Honda",
        model: "Civic",
        color: "Blue",
        licencePlate: "XYZ5678",
        chassisNumber: "0987654321",
        serviceDescription: "Troca de óleo",
        serviceStatus: "Concluído",
        repairDate: "2024-03-25",
        serviceValue: "R$ 120,00",
    },
];

interface ITableServiceColumn {
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
}

export function TableService({
    column1,
    column2,
    column3,
    column4,
    column5,
    column6,
    column7,
    column8,
    title,
    subtitle,
}: ITableServiceColumn) {
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
        licencePlate: "",
        status: "",
        date: "",
    });

    const toggleAccordion = () => setIsOpen(!isOpen);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const filteredServices = services.filter((service) => {
        return (
            (filters.licencePlate === "" || service.licencePlate.toLowerCase().includes(filters.licencePlate.toLowerCase())) &&
            (filters.status === "" || service.serviceStatus.toLowerCase().includes(filters.status.toLowerCase())) &&
            (filters.date === "" || service.repairDate.includes(filters.date))
        );
    });

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
                    {/* Filtros */}
                    <div className="flex gap-6 mb-6">
                        <input
                            type="text"
                            name="licencePlate"
                            placeholder="Filtrar por Placa"
                            className="border border-gray-300 p-2 rounded-md w-1/4"
                            value={filters.licencePlate}
                            onChange={handleFilterChange}
                        />
                        <select
                            name="status"
                            className="border border-gray-300 p-2 rounded-md w-1/4"
                            value={filters.status}
                            onChange={handleFilterChange}
                        >
                            <option value="">Filtrar por Status</option>
                            <option value="Em andamento">Em andamento</option>
                            <option value="Concluído">Concluído</option>
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
                                <TableCell>{column1 || "Nº Serviço"}</TableCell>
                                <TableCell>{column2 || "Proprietário"}</TableCell>
                                <TableCell>{column3 || "Marca"}</TableCell>
                                <TableCell>{column4 || "Modelo"}</TableCell>
                                <TableCell>{column5 || "Placa"}</TableCell>
                                <TableCell>{column6 || "Status"}</TableCell>
                                <TableCell>{column7 || "Valor"}</TableCell>
                                <TableCell>{column8 || "Data"}</TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredServices.map((service) => (
                                <TableRow key={service.id}>
                                    <TableCell>{service.id}</TableCell>
                                    <TableCell>{service.ownerName}</TableCell>
                                    <TableCell>{service.carBrand}</TableCell>
                                    <TableCell>{service.model}</TableCell>
                                    <TableCell>{service.licencePlate}</TableCell>
                                    <TableCell>
                                        <span
                                            className={`px-2 py-1 rounded-md text-background ${service.serviceStatus === "Em andamento"
                                                ? "bg-yellow-500"
                                                : "bg-blue-500"
                                                }`}
                                        >
                                            {service.serviceStatus}
                                        </span>
                                    </TableCell>
                                    <TableCell>{service.serviceValue}</TableCell>
                                    <TableCell>{service.repairDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
}
