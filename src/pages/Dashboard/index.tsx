import { Header } from "@/components/Header";
import { CarFront, Clock, DollarSign, User } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Cards from "./components/Cards";
import { TableDemo } from "./components/Table";

export function Dashboard() {
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
            <Cards
              icon={<CarFront className="h-8 w-8 text-black" />}
              text="Veiculo"
              textColor="text-white"
              title="ABC-0A12"
              subtitle="Chassi 1HGCM82633A123456"
              cardBackground="bg-black"
              iconBackground="bg-white"
              titleColor="text-background"
              subtitleColor="text-background"
              buttonText="Alterar"
              buttonBackgroundColor="bg-white"
            />

            <Cards
              icon={<User className="h-8 w-8 text-white" />}
              text="Profissional"
              title="Ricardo"
              subtitle="Atribuir novo profissional"
              cardBackground="bg-white"
              iconBackground="bg-primary"
              titleColor="text-foreground"
              subtitleColor="text-primary"
              buttonText="Alterar"
              textColor="text-foreground"
            />

            <Cards
              icon={<DollarSign className="h-8 w-8 text-black" />}
              text="Valor"
              title="R$ 4.250,00"
              subtitle="Pendente"
              cardBackground="bg-white"
              iconBackground="bg-[#17CFAF]"
              titleColor="text-foreground"
              subtitleColor="text-foreground"
              buttonText="Editar"
              buttonBackgroundColor="bg-[#17CFAF]"
            />

            <Cards
              icon={<Clock className="h-8 w-8 text-primary" />}
              text="Status"
              title="Em andamento"
              textColor="text-white"
              subtitle="00:14:43"
              cardBackground="bg-primary"
              iconBackground="bg-white"
              titleColor="text-white"
              subtitleColor="text-white"
              buttonText="Encerrar"
              buttonTextColor="text-primary"
            />
          </div>
          <TableDemo
            column1="Id"
            column2="Descrição"
            column3="Categoria"
            column4="Fabricante"
            column5="Valor"
            column6="Qtd"
            column7="Valor Total"
            title="Peças em uso"
            subtitle="Registro das peças e componentes usados nos serviços atuais da oficina"
          />
        </div>
      </div>
    </div>
  );
}
