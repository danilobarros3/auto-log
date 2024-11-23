import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Box } from "lucide-react";

const data = [
  {
    id: "INV001",
    descricao: "Amortecedor Dianteiro",
    categoria: "Suspensão",
    fabricante: "Monroe",
    qtd: 2,
    valor: "R$ 700,00",
    valorTotal: "R$ 250,00",
  },
  {
    id: "INV002",
    descricao: "Pastilha de Freio",
    categoria: "Freios",
    fabricante: "Bosch",
    qtd: 4,
    valor: "R$ 150,00",
    valorTotal: "R$ 600,00",
  },
  {
    id: "INV003",
    descricao: "Pneus Pirelli",
    categoria: "Pneus",
    fabricante: "Pirelli",
    qtd: 8,
    valor: "R$ 350,00",
    valorTotal: "R$ 2.800,00",
  },
];

export function TableDashboard() {
  return (
    <div className="space-y-6 bg-white rounded-lg shadow-md p-10">
      <div className="flex justify-between">
        <div className="grid space-y-2">
          <div className="flex gap-4 items-center">
          <h2 className="text-2xl">Peças em uso</h2>
          <p className="rounded-full bg-black text-white w-[30px] h-[30px] flex items-center justify-center text-sm">
            {data.length}
          </p>
          </div>

          <p className="text-lg">
            Registro das peças e componentes usados nos serviços atuais da
            oficina.
          </p>
        </div>
        <div className="flex">
          <Button className="border border-[#F5F5F5] text-black rounded-full bg-white">
            <Box width={16} height={16} />
            Adicionar Peças
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Fabricante</TableHead>
              <TableHead>Qtd</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead className="text-right">Valor Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.descricao}</TableCell>
                <TableCell>{item.categoria}</TableCell>
                <TableCell>{item.fabricante}</TableCell>
                <TableCell>{item.qtd}</TableCell>
                <TableCell>{item.valor}</TableCell>
                <TableCell className="text-right">{item.valorTotal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
