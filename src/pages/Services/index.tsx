import { Header } from "@/components/Header";
import { Layers, Briefcase, CheckCircle } from "lucide-react";
import InfoCard from "@/components/InfoCard";
import Sidebar from "@/components/Sidebar";

export function Services() {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-8xl">
            <InfoCard
              icon={<Layers className="h-8 w-8 text-white" />}
              title="10"
              subtitle="Tarefas de hoje"
              cardBackground="bg-primary"
              iconBackground="bg-secondary"
              titleColor="text-background"
              subtitleColor="text-background"
            />

            <InfoCard
              icon={<Briefcase className="h-8 w-8 text-white" />}
              title="2"
              subtitle="Em andamento"
              cardBackground="bg-card"
              iconBackground="bg-secondary"
              titleColor="text-foreground"
              subtitleColor="text-foreground"
            />

            <InfoCard
              icon={<CheckCircle className="h-8 w-8 text-white" />}
              title="5"
              subtitle="Concluído"
              cardBackground="bg-card"
              iconBackground="bg-secondary"
              titleColor="text-foreground"
              subtitleColor="text-foreground"
            />

            <InfoCard
              icon={<CheckCircle className="h-8 w-8 text-white" />}
              title="5"
              subtitle="Concluído"
              cardBackground="bg-card"
              iconBackground="bg-secondary"
              titleColor="text-foreground"
              subtitleColor="text-foreground"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
