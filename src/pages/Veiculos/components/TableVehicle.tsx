// components/TableVehicles.tsx
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const vehicles = [
    {
        id: "V001",
        ownerName: "John Clinton",
        carBrand: "Toyota",
        model: "Corolla",
        color: "Red",
        licencePlate: "ABC1234",
        chassisNumber: "1335567890",
    },
    {
        id: "V002",
        ownerName: "Mary Smith",
        carBrand: "Honda",
        model: "Civic",
        color: "Blue",
        licencePlate: "XYZ5678",
        chassisNumber: "0987654321",
    },
];

interface ITableVehicleColumn {
    column1?: string;
    column2?: string;
    column3?: string;
    column4?: string;
    column5?: string;
    column6?: string;
    column7?: string;
    title?: string;
    subtitle?: string;
}

export function TableVehicles({
    column1,
    column2,
    column3,
    column4,
    column5,
    column6,
    title,
    subtitle,
}: ITableVehicleColumn) {
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
        ownerName: "",
        licencePlate: "",
    });

    const toggleAccordion = () => setIsOpen(!isOpen);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const filteredVehicles = vehicles.filter((vehicle) => {
        return (
            (filters.ownerName === "" || vehicle.ownerName.toLowerCase().includes(filters.ownerName.toLowerCase())) &&
            (filters.licencePlate === "" || vehicle.licencePlate.toLowerCase().includes(filters.licencePlate.toLowerCase()))
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
                    <a href="/register-vehicle">
                        <Button className="bg-primary text-background rounded-md px-4 py-2 shadow-md hover:bg-blue-600">
                            Novo Veículo
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
                                <TableCell>{column1 || "Nº Veículo"}</TableCell>
                                <TableCell>{column2 || "Proprietário"}</TableCell>
                                <TableCell>{column3 || "Marca"}</TableCell>
                                <TableCell>{column4 || "Modelo"}</TableCell>
                                <TableCell>{column5 || "Placa"}</TableCell>
                                <TableCell>{column6 || "Chassi"}</TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredVehicles.map((vehicle) => (
                                <TableRow key={vehicle.id}>
                                    <TableCell>{vehicle.id}</TableCell>
                                    <TableCell>{vehicle.ownerName}</TableCell>
                                    <TableCell>{vehicle.carBrand}</TableCell>
                                    <TableCell>{vehicle.model}</TableCell>
                                    <TableCell>{vehicle.licencePlate}</TableCell>
                                    <TableCell>{vehicle.chassisNumber}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
}
