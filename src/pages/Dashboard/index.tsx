import { Header } from "@/components/header";
import { Layers, Briefcase, CheckCircle } from "lucide-react";
import InfoCard from "@/components/InfoCard";

export function Dashboard() {
  return (
    <>
      <Header
        companyName="Minha Oficina"
        pageTitle="Dashboard"
        avatarSrc={null}
      />

      <div className="flex flex-col items-center gap-6 min-h-screen bg-white p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-8xl">
          <InfoCard
            icon={<Layers className="h-8 w-8 text-white" />}
            title="10"
            subtitle="Tarefas de hoje"
            cardBackground="bg-blue-500"
            iconBackground="bg-blue-400"
            titleColor="text-white"
            subtitleColor="text-white"
          />

          <InfoCard
            icon={<Briefcase className="h-8 w-8 text-white" />}
            title="2"
            subtitle="Em andamento"
            cardBackground="bg-white"
            iconBackground="bg-blue-500"
            titleColor="text-black"
            subtitleColor="text-black"
          />

          <InfoCard
            icon={<CheckCircle className="h-8 w-8 text-white" />}
            title="5"
            subtitle="Concluído"
            cardBackground="bg-white"
            iconBackground="bg-blue-500"
            titleColor="text-black"
            subtitleColor="text-black"
          />

          <InfoCard
            icon={<CheckCircle className="h-8 w-8 text-white" />}
            title="5"
            subtitle="Concluído"
            cardBackground="bg-white"
            iconBackground="bg-blue-500"
            titleColor="text-black"
            subtitleColor="text-black"
          />
        </div>

        <div className="flex justify-center mt-10">
          <div className="text-4xl font-bold text-sky-500 underline">
            Dashboard!
          </div>
        </div>
      </div>
    </>
  );
}