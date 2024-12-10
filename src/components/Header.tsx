import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search, Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import api from "@/services";

interface HeaderProps {
  companyName: string;
  pageTitle: string;
  avatarSrc: string | null;
}

export function Header({ companyName, pageTitle, avatarSrc }: HeaderProps) {
  const [alerts, setAlerts] = useState<
    {
      message: string;
      details: string;
      id: string;
      plate: string;
    }[]
  >([
    {
      message: "Novo serviço agendado",
      details: "ID: 12345 | Placa: ABC-1234",
      id: "12345",
      plate: "ABC-1234",
    },
  ]);

  const removeAlert = (index: number) => {
    const newAlerts = [...alerts];
    newAlerts.splice(index, 1);
    setAlerts(newAlerts);
  };

  const [data, setData] = useState({
    user: {
      name: "",
      email: "",
      cnpj: "",
      phone: "",
    },
    oficina: {
      nameWorkshop: "",
      addressWorkshop: "",
    },
    password: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/users/1");
        const userData = response.data;
        setData({
          user: {
            name: userData.name,
            email: userData.email,
            cnpj: userData.cnpj,
            phone: userData.phone,
          },
          oficina: {
            nameWorkshop: userData.nameWorkshop,
            addressWorkshop: userData.addressWorkshop,
          },
          password: "********",
        });
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <header className="flex items-center justify-between p-3 bg-background px-4 md:px-8">
      <h1 className="hidden sm:block text-xl font-medium text-foreground">
        {pageTitle}
      </h1>

      <div className="relative w-1/2 sm:w-1/3 md:w-1/6">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={15}
        />
        <Input
          type="text"
          placeholder="Buscar..."
          className="pl-10 rounded-full text-sm"
        />
      </div>

      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="relative">
              <Bell
                className={`cursor-pointer ${
                  alerts.length > 0 ? "text-blue-500" : "text-gray-500"
                }`}
                size={20}
              />
              {alerts.length > 0 && (
                <span className="absolute top-0 right-0 bg-foreground text-background text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {alerts.length}
                </span>
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 bg-white border border-gray-200 rounded-lg shadow-lg">
            {alerts.length > 0 ? (
              alerts.map((alert, index) => (
                <DropdownMenuItem
                  key={index}
                  className="text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-start"
                >
                  <div>
                    <div className="font-semibold">{alert.message}</div>
                    <div className="text-xs text-gray-500">{alert.details}</div>
                  </div>
                  <button
                    onClick={() => removeAlert(index)}
                    className="text-sm text-gray-500 hover:text-red-500"
                  >
                    x
                  </button>
                </DropdownMenuItem>
              ))
            ) : (
              <DropdownMenuItem className="text-sm text-gray-500">
                Sem alertas
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center space-x-3">
          <Avatar className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
            {avatarSrc ? (
              <AvatarImage src={avatarSrc} alt="User Avatar" />
            ) : (
              <Avatar className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
              {avatarSrc ? (
                <AvatarImage src={avatarSrc} alt="User Avatar" />
              ) : (
                <AvatarFallback className="bg-foreground text-background flex items-center justify-center">
                  {(
                    data.oficina.nameWorkshop
                      ? data.oficina.nameWorkshop
                      : companyName
                  )
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </AvatarFallback>
              )}
            </Avatar>
            
            )}
          </Avatar>
          <p className="text-sm font-medium text-foreground">
            {data.oficina.nameWorkshop
              ? data.oficina.nameWorkshop
              : companyName}
          </p>
        </div>
      </div>
    </header>
  );
}
