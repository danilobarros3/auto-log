import { BookOpen, Box, CarFront, Clock, Home, Search, Settings, Sun } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/autolog.png";
import { useState } from "react";

const items = [
  {
    title: "Dashboard",
    url: "/", 
    icon: Home,
  },
  {
    title: "Serviços",
    url: "/servicos", 
    icon: Clock,
  },
  {
    title: "Registro",
    url: "/registro", 
    icon: CarFront,
  },
  {
    title: "Histórico",
    url: "/historico", 
    icon: BookOpen,
  },
  {
    title: "Peças",
    url: "/pecas", 
    icon: Box,
  },
  {
    title: "Gerenciamento",
    url: "/gerenciamento", 
    icon: Search,
  },
  {
    title: "Tema",
    url: "/gerenciamento", 
    icon: Sun,
  },
  {
    title: "Configurações",
    url: "/configuracao", 
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation(); 
  const [selected, setSelected] = useState(location.pathname); 

  const handleSelect = (url: string) => {
    setSelected(url); 
  };

  return (
    <Sidebar className="bg-white">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex py-5 px-4">
            <img src={logo} alt="Logo Autolog" width={50} height={36} />
            <SidebarGroupLabel className="text-2xl text-black">Autolog</SidebarGroupLabel>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="grid py-5 px-4 gap-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      onClick={() => handleSelect(item.url)} 
                      className={`flex items-center gap-2 p-2 rounded-md hover:bg-[#0070FF]/10 ${
                        selected === item.url ? "bg-[#0070FF] text-white" : "text-black"
                      }`}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
