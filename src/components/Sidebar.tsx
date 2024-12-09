import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  Home,
  Layers,
  FileText,
  Clock,
  Box,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";
import clsx from "clsx";
import { toast } from "sonner";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user:accessUser");

    setShowLogoutModal(false);
    toast.success("Deslogado com sucesso!");
    navigate("/login");
  };

  const menuItems = [
    { icon: <Layers size={20} />, label: "Serviços", route: "/" },
    { icon: <Home size={20} />, label: "Veículos", route: "/veiculos" },
    { icon: <FileText size={20} />, label: "Registro", route: "/register" },
    { icon: <Clock size={20} />, label: "Histórico", route: "/history" },
    { icon: <Box size={20} />, label: "Peças", route: "/parts" },
  ];

  return (
    <div className="relative flex ">
      <aside
        className={clsx(
          "h-screen bg-background shadow-lg border-r transition-all duration-300 flex flex-col relative",
          isOpen ? "w-64" : "w-16"
        )}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-8 h-8">
              <img
                src="/autolog.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            {isOpen && (
              <span className="text-lg font-medium text-foreground">
                Autolog
              </span>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              "p-1.5 rounded-full bg-foreground text-background shadow-md transition-all",
              isOpen
                ? "ml-2"
                : "absolute top-4 left-1/2 transform -translate-x-1/2"
            )}
            aria-label="Toggle Sidebar"
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        <nav className="flex-1 mt-4">
          {menuItems.map((item, index) => (
            <Link to={item.route} key={index} className="block">
              <div
                className={clsx(
                  "flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md mx-2",
                  {
                    "justify-center": !isOpen,
                    "bg-blue-500 text-white dark:bg-blue-600":
                      location.pathname === item.route,
                  }
                )}
              >
                {item.icon}
                {isOpen && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </div>
            </Link>
          ))}
        </nav>

        <Link
          to="/configuration"
          className={clsx(
            "mt-2 flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md mx-2",
            { "justify-center": !isOpen }
          )}
        >
          <Settings size={20} />
          {isOpen && <span className="text-sm font-medium">Configurações</span>}
        </Link>

        <button
          onClick={() => setShowLogoutModal(true)}
          className={clsx(
            "mt-2 flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md mx-2",
            { "justify-center": !isOpen }
          )}
        >
          <LogOut size={20} />
          {isOpen && <span className="text-sm font-medium">Deslogar</span>}
        </button>
      </aside>

      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-80">
            <h3 className="text-lg font-bold">Deseja sair?</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Tem certeza de que deseja deslogar?
            </p>
            <div className="mt-4 flex gap-3 justify-end">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                Cancelar
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
