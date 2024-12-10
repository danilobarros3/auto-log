import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Box, Minus, Plus, Search, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface IPart {
  idPart: number;
  name: string;
  partNumber: string;
  quantity: number;
  price: string;
  description: string;
}

interface ITableColumn {
  title?: string;
  subtitle?: string;
}

export function TablePartsInUse({ title, subtitle }: ITableColumn) {
  const [isOpen, setIsOpen] = useState(false);
  const [parts, setParts] = useState<IPart[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchId, setSearchId] = useState<string>("");

  const navigate = useNavigate();

  const toggleAccordion = () => setIsOpen(!isOpen);

  const fetchParts = async () => {
    try {
      const response = await fetch("http://localhost:8080/parts");
      if (!response.ok) {
        throw new Error("Falha ao buscar dados");
      }
      const data = await response.json();
      setParts(data);
    } catch (error) {
      setError("Erro ao carregar as peças");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParts();
  }, []);

  const filteredParts = parts.filter((part) => {
    const matchesName = part.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesId = part.partNumber.includes(searchId);
    return matchesName && matchesId;
  });

  const deletePart = async (id: number) => {
    try {
      await fetch(`http://localhost:8080/parts/${id}`);
      setParts(parts.filter((part) => part.idPart !== id));
      toast.success("Peça deletada com sucesso!");
    } catch (error) {
      setError("Erro ao excluir a peça");
    }
  };

  return (
    <div className="bg-white flex flex-col justify-center w-full rounded-2xl shadow-xl p-6">
      <div
        className="flex gap-4 items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <button className="flex items-center justify-center">
          {isOpen ? (
            <div className="bg-gray-100 border border-gray-300 rounded-full p-1">
              <Minus className="h-6 w-6 text-gray-500" />
            </div>
          ) : (
            <div className="bg-gray-100 border border-gray-300 rounded-full p-1">
              <Plus className="h-6 w-6 text-gray-500" />
            </div>
          )}
        </button>
        <div className="flex flex-1 justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
          </div>
          <Button
            className="flex items-center justify-center bg-blue-500 text-white border border-blue-500 shadow-lg hover:bg-blue-600 transition-colors"
            onClick={() => navigate("/parts/form")}
          >
            <Box className="h-6 w-6 text-foreground" />
            <span className="text-foreground">Adicionar peça</span>
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4">
          {loading && <p className="text-gray-500">Carregando...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && filteredParts.length === 0 && (
            <p className="text-gray-500">Sem peças registradas.</p>
          )}

          <div className="flex space-x-4 mb-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nome da peça..."
                className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-2.5">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Buscar pelo número da peça..."
                className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-2.5">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          {!loading && !error && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px] text-black">
                    Id da peça
                  </TableHead>
                  <TableHead className="text-black">Nome</TableHead>
                  <TableHead className="text-black">Quantidade</TableHead>
                  <TableHead className="text-black">Preço</TableHead>
                  <TableHead className="text-black">Descrição</TableHead>
                  <TableHead className="text-black">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredParts.map((part, index) => (
                  <TableRow
                    key={index}
                    className="odd:bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <TableCell className="font-medium">
                      {part.partNumber}
                    </TableCell>
                    <TableCell>{part.name}</TableCell>
                    <TableCell>{part.quantity}</TableCell>
                    <TableCell>{part.price}</TableCell>
                    <TableCell>{part.description}</TableCell>
                    <TableCell className="text-right">
                      <button
                        onClick={() => deletePart(part.idPart)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      )}
    </div>
  );
}
