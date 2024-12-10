import { Header } from "@/components/Header";
import { Layers, Briefcase, CheckCircle, XCircle } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import InfoCard from "@/components/InfoCard";
import { TableService } from "./components/tableServices";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import api from "@/services";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IService {
  idMaintenance: number;
  serviceDescription: string;
  serviceStatus: string;
  repairDate: string;
  serviceValue: number;
}

export function Services() {
  const [services, setServices] = useState<IService[]>([]);

  const fetchServices = async () => {
    try {
      const { data } = await api.get(`/users/1/cars/1/maintenance`);
      setServices(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const tasksToday = services.filter(
    (service) => service.serviceStatus ?? service.repairDate === today
  ).length;
  const inProgress = services.filter(
    (service) => service.serviceStatus === "Em andamento"
  ).length;
  const completed = services.filter(
    (service) => service.serviceStatus === "Concluido"
  ).length;
  const cancelled = services.filter(
    (service) => service.serviceStatus === "Cancelado"
  ).length;

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Serviços Realizados",
        data: [5, 10, 7, 8, 4, 6, 12, 11, 9, 10, 14, 13],
        backgroundColor: "#3b82f6",
        borderRadius: 8,
        borderColor: "#1e40af",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Quantidade de Serviços Realizados Durante o Ano",
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Meses",
        },
      },
      y: {
        title: {
          display: true,
          text: "Quantidade de Serviços",
        },
        min: 0,
      },
    },
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header
          companyName="Minha Oficina"
          pageTitle="Serviços"
          avatarSrc={null}
        />

        <div className="flex flex-col items-center gap-6 min-h-screen bg-background p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-8xl">
            <InfoCard
              icon={<Layers className="h-8 w-8 text-white" />}
              description=""
              title={tasksToday.toString()}
              subtitle="Tarefas de hoje"
              cardBackground="bg-primary"
              iconBackground="bg-secondary"
              titleColor="text-background"
              subtitleColor="text-background"
            />

            <InfoCard
              icon={<Briefcase className="h-8 w-8 text-white" />}
              description=""
              title={inProgress.toString()}
              subtitle="Em andamento"
              cardBackground="bg-card"
              iconBackground="bg-secondary"
              titleColor="text-foreground"
              subtitleColor="text-foreground"
            />

            <InfoCard
              icon={<CheckCircle className="h-8 w-8 text-white" />}
              description=""
              title={completed.toString()}
              subtitle="Concluído"
              cardBackground="bg-card"
              iconBackground="bg-secondary"
              titleColor="text-foreground"
              subtitleColor="text-foreground"
            />

            <InfoCard
              icon={<XCircle className="h-8 w-8 text-white" />}
              description=""
              title={cancelled.toString()}
              subtitle="Cancelado"
              cardBackground="bg-card"
              iconBackground="bg-secondary"
              titleColor="text-foreground"
              subtitleColor="text-foreground"
            />
          </div>

          <TableService
            title="Serviços"
            subtitle="Confira os detalhes dos serviços realizados na oficina."
            column1="Nº Serviço"
            column2="Proprietário"
            column3="Marca"
            column4="Modelo"
            column5="Placa"
            column6="Status"
            column7="Valor"
            column8="Data"
          />
          <div className="w-full max-w-4xl">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}
