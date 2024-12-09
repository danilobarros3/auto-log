import { Header } from "@/components/Header";
import { Car, Clipboard, CheckCircle } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import InfoCard from "@/components/InfoCard";
import { TableVehicles } from "./components/TableVehicle";

export function Vehicles() {
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
                            title="25"
                            subtitle="Veículos Registrados"
                            cardBackground="bg-primary"
                            iconBackground="bg-secondary"
                            titleColor="text-background"
                            subtitleColor="text-background"
                        />

                        <InfoCard
                            icon={<Clipboard className="h-8 w-8 text-white" />}
                            description=""
                            title="8"
                            subtitle="Veículos em Manutenção"
                            cardBackground="bg-card"
                            iconBackground="bg-secondary"
                            titleColor="text-foreground"
                            subtitleColor="text-foreground"
                        />

                        <InfoCard
                            icon={<CheckCircle className="h-8 w-8 text-white" />}
                            description=""
                            title="15"
                            subtitle="Veículos Concluídos"
                            cardBackground="bg-card"
                            iconBackground="bg-secondary"
                            titleColor="text-foreground"
                            subtitleColor="text-foreground"
                        />

                        <InfoCard
                            icon={<CheckCircle className="h-8 w-8 text-white" />}
                            description=""
                            title="2"
                            subtitle="Registrados Hoje"
                            cardBackground="bg-card"
                            iconBackground="bg-secondary"
                            titleColor="text-foreground"
                            subtitleColor="text-foreground"
                        />
                    </div>

                    <TableVehicles
                        title="Veículos"
                        subtitle="Confira os detalhes dos veículos registrados."
                        column1="ID"
                        column2="Proprietário"
                        column3="Marca"
                        column4="Modelo"
                        column5="Placa"
                        column6="Status"
                        column7="Data Registro"
                    />
                </div>
            </div>
        </div>
    );
}
