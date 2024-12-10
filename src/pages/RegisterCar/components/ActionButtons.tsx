import { CarFront, Layers } from "lucide-react";

interface ActionButtonsProps {
  onVehicleClick: () => void;
  onServiceClick: () => void;
}

export function ActionButtons({ onVehicleClick, onServiceClick }: ActionButtonsProps) {
  return (
    <div className="flex flex-col items-center gap-12 w-full max-w-3xl mx-auto px-4">
      {/* Título */}
      <h1 className="text-foreground font-medium text-2xl text-center">
        O que você gostaria de registrar?
      </h1>

      {/* Botões */}
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        {/* Botão Veículo */}
        <button
          onClick={onVehicleClick}
          className="flex items-center justify-center space-between gap-8 w-full p-10 bg-foreground text-background rounded-lg transform transition-all duration-300 hover:scale-105"
        >
          <CarFront className="w-12 h-12" />
          <span className="text-xl font-semibold">Veículo</span>
        </button>

        {/* Botão Serviço */}
        <button
          onClick={onServiceClick}
          className="flex items-center justify-center space-between gap-8 w-full p-10 bg-primary text-white rounded-lg hover:bg-secondary transform transition-all duration-300 hover:scale-105"
        >
          <Layers className="w-12 h-12" />
          <span className="text-xl font-semibold">Serviço</span>
        </button>
      </div>
    </div>
  );
}
