import React, { useState, useEffect } from "react";
import {
  Home,
  Layers,
  FileText,
  Clock,
  Box,
  Settings,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import clsx from "clsx";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard" },
    { icon: <Layers size={20} />, label: "Serviços" },
    { icon: <FileText size={20} />, label: "Registro" },
    { icon: <Clock size={20} />, label: "Histórico" },
    { icon: <Box size={20} />, label: "Peças" },
  ];

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="relative flex">
      <aside
        className={clsx(
          "h-screen bg-background  shadow-lg border-r transition-all duration-300 flex flex-col relative",
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
              <span className="text-lg font-medium text-foregrounf">
                Autolog
              </span>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              "p-1.5 rounded-full bg-foreground text-background shadow-md  transition-all",
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
            <div
              key={index}
              className={clsx(
                "flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md mx-2",
                { "justify-center": !isOpen }
              )}
            >
              {item.icon}
              {isOpen && (
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </nav>

        <div
          className={clsx(
            "flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md mx-2",
            { "justify-center": !isOpen }
          )}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          {isOpen && (
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Tema
            </span>
          )}
        </div>

        <div
          className={clsx(
            "mt-auto flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md mx-2",
            { "justify-center": !isOpen }
          )}
        >
          <Settings size={20} />
          {isOpen && (
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Configurações
            </span>
          )}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
