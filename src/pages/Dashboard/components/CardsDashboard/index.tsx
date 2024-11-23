import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarFront } from "lucide-react";

export function CardsDashboard() {
  return (
    <>
      <div className="flex gap-14 w-full">
        <Card className="bg-black w-full grid px-10 rounded-3xl">
          <CardHeader>
            <div className="flex justify-between items-center gap-5">
              <div className="flex items-center gap-5">
                <div className="bg-white p-2 rounded-full flex justify-center items-center">
                  <CarFront className="w-7 h-7" />
                </div>
                <CardTitle className="text-white text-2xl">Veiculo</CardTitle>
              </div>
              <Button className="rounded-3xl bg-white text-black">
                Alterar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-white text-4xl">ABC-1234</p>
          </CardContent>
          <CardFooter>
            <p className="text-white">Chassi 1HGCM82633A123456 </p>
          </CardFooter>
        </Card>
        <Card className="w-full grid px-10 rounded-3xl shadow-xl">
          <CardHeader>
            <div className="flex justify-between items-center gap-5">
              <div className="flex items-center gap-5">
                <div className="bg-[#0070FF] p-2 rounded-full flex justify-center items-center">
                  <CarFront className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Profissional</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">Ricardo</p>
          </CardContent>
          <CardFooter>
            <p className="text-[#0070FF]">Atribuir novo profisional </p>
          </CardFooter>
        </Card>
        <Card className="w-full grid px-10 rounded-3xl shadow-xl">
          <CardHeader>
            <div className="flex justify-between items-center gap-5">
              <div className="flex items-center gap-5">
                <div className="bg-[#26e3c2] p-2 rounded-full flex justify-center items-center">
                  <CarFront className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">Valor</CardTitle>
              </div>
              <Button className="rounded-3xl bg-[#26e3c2] text-black">
                Editar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-4xl text-nowrap">R$ 4.250,00</p>
          </CardContent>
          <CardFooter>
            <p>Pendente </p>
          </CardFooter>
        </Card>
        <Card className="w-full grid px-10 rounded-3xl shadow-xl bg-[#0070FF]">
          <CardHeader>
            <div className="flex justify-between items-center gap-5">
              <div className="flex items-center gap-5">
                <div className="bg-white p-2 rounded-full flex justify-center items-center">
                  <CarFront className="w-7 h-7 text-[#0070FF]" />
                </div>
                <CardTitle className="text-2xl text-white">Status</CardTitle>
              </div>
              <Button className="rounded-3xl bg-white text-[#0070FF]">
                Editar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-4xl text-nowrap text-white">Em andamento</p>
          </CardContent>
          <CardFooter>
            <p className="text-white">00:00:14 </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
