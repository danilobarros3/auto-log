import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { TablePartsInUse } from "./PartsTable";

export function PartsPage() {
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
          <TablePartsInUse
           title="Estoque de Peças"
           subtitle="Confira os detalhes das peças em seu estoque"/>
          
          
        </div>
      </div>
    </div>
  );
}
