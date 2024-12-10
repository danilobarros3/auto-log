import { Header } from "@/components/Header";
import { Car, Clipboard, CheckCircle } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import InfoCard from "@/components/InfoCard";
import { TableVehicles } from "./components/TableVehicle";
import { useEffect, useState } from "react";
import api from "@/services";

interface IMaintenance {
  idMaintenance: number;
  serviceDescription: string;
  serviceStatus: string;
  repairDate: string;
  serviceValue: number;
}

interface IVehicle {
  idCar: number;
  ownerName: string;
  carBrand: string;
  model: string;
  color: string;
  licencePlate: string;
  chassisNumber: string;
  maintenanceHistory: IMaintenance[];
}

export function Vehicles() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  const fetchVehicles = async () => {
    try {
      const { data } = await api.get(`/users/1/cars`);
      setVehicles(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  // Data de hoje no formato "YYYY-MM-DD"
  const today = new Date().toISOString().split("T")[0];

  // Indicadores
  const totalVehicles = vehicles.length;
  
  const vehiclesInMaintenance = vehicles.filter(vehicle => 
    vehicle.maintenanceHistory.some(maintenance => maintenance.serviceStatus === "Em andamento")
  ).length;

  const vehiclesCompleted = vehicles.filter(vehicle => 
    vehicle.maintenanceHistory.some(maintenance => maintenance.serviceStatus === "Concluido")
  ).length;

  const vehiclesRegisteredToday = vehicles.filter(vehicle => 
    vehicle.maintenanceHistory.some(maintenance => maintenance.repairDate === today)
  ).length;

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header
          companyName="Minha Oficina"
          pageTitle="Veículos"
          avatarSrc={null}
        />

        <div className="flex flex-col items-center gap-6 min-h-screen bg-background p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-8xl">
            <InfoCard
              icon={<Car className="h-8 w-8 text-white" />}
              description=""
              title={totalVehicles.toString()}
              subtitle="Veículos Registrados"
              cardBackground="bg-primary"
              iconBackground="bg-secondary"
              titleColor="text-background"
              subtitleColor="text-background"
            />

            <InfoCard
              icon={<Clipboard className="h-8 w-8 text-white" />}
              description=""
              title={vehiclesInMaintenance.toString()}
              subtitle="Veículos em Manutenção"
              cardBackground="bg-card"
              iconBackground="bg-secondary"
              titleColor="text-foreground"
              subtitleColor="text-foreground"
            />

            <InfoCard
              icon={<CheckCircle className="h-8 w-8 text-white" />}
              description=""
              title={vehiclesCompleted.toString()}
              subtitle="Veículos Concluídos"
              cardBackground="bg-card"
              iconBackground="bg-secondary"
              titleColor="text-foreground"
              subtitleColor="text-foreground"
            />

            <InfoCard
              icon={<CheckCircle className="h-8 w-8 text-white" />}
              description=""
              title={vehiclesRegisteredToday.toString()}
              subtitle="Registrados Hoje"
              cardBackground="bg-card"
              iconBackground="bg-secondary"
              titleColor="text-foreground"
              subtitleColor="text-foreground"
            />
          </div>
          <TableVehicles />
        </div>
      </div>
    </div>
  );
}
