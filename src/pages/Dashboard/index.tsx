import { Header } from "@/components/header"; // Certifique-se de importar o Header corretamente

export function Dashboard() {
  return (
    <>
      {/* Header no topo, ocupando toda a largura */}
      <Header
        companyName="Minha Oficina"
        pageTitle="Dashboard"
        avatarSrc={null}
      />

      {/* Corpo da página */}
      <div className="flex justify-center mt-20">
        <div className="text-4xl font-bold text-sky-500 underline">
          Dashboard!
        </div>
      </div>
    </>
  );
}
