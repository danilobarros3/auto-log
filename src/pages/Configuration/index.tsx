import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EditableField = ({
  label,
  value,
  name,
  isEditing,
  onChange,
}: {
  label: string;
  value: string;
  name: string;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label className="text-sm font-thin text-gray-600">{label}</label>
    {isEditing ? (
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Digite ${label.toLowerCase()}`}
        className="text-gray-900 p-2 border border-gray-300 rounded"
      />
    ) : (
      <p className="text-gray-900">{value}</p>
    )}
  </div>
);

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-lg shadow p-6 mb-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    {children}
  </div>
);

export default function Config() {
  const [activeTab, setActiveTab] = useState("Conta");
  const [theme, setTheme] = useState("light");

  const [isEditing, setIsEditing] = useState({
    info: false,
    oficina: false,
    password: false,
  });

  const [data, setData] = useState({
    user: {
      nome: "Nome Usuário",
      email: "email.usuario@email.com",
      cnpj: "12.345.678/0001-99",
      telefone: "(00) 00000-0000",
    },
    oficina: {
      nome: "Nome Oficina",
      endereco: "Endereço Oficina",
    },
    password: "********",
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleChange = (
    section: "user" | "oficina",
    key: string,
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [key]: value },
    }));
  };

  const tabs: Record<string, JSX.Element> = {
    Conta: (
      <Section
        title="Informações Pessoais"
        description="Consulte seus dados pessoais para uma experiência personalizada."
      >
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(data.user).map(([key, value]) => (
            <EditableField
              key={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={value}
              name={key}
              isEditing={isEditing.info}
              onChange={(e) => handleChange("user", key, e.target.value)}
            />
          ))}
        </div>
        <Button
          onClick={() =>
            setIsEditing((prev) => ({ ...prev, info: !prev.info }))
          }
          className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md mt-4"
        >
          {isEditing.info ? "Salvar" : "Editar"}
        </Button>
      </Section>
    ),
    Negócio: (
      <Section
        title="Dados da Oficina"
        description="Visualize os dados da sua oficina para melhor atendimento aos clientes."
      >
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(data.oficina).map(([key, value]) => (
            <EditableField
              key={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={value}
              name={key}
              isEditing={isEditing.oficina}
              onChange={(e) => handleChange("oficina", key, e.target.value)}
            />
          ))}
        </div>
        <Button
          onClick={() =>
            setIsEditing((prev) => ({ ...prev, oficina: !prev.oficina }))
          }
          className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md mt-4"
        >
          {isEditing.oficina ? "Salvar" : "Editar"}
        </Button>
      </Section>
    ),
    Segurança: (
      <Section
        title="Segurança"
        description="Gerencie as configurações de segurança e altere sua senha."
      >
        <EditableField
          label="Senha"
          value={data.password}
          name="password"
          isEditing={isEditing.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <Button
          onClick={() =>
            setIsEditing((prev) => ({ ...prev, password: !prev.password }))
          }
          className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md mt-4"
        >
          {isEditing.password ? "Salvar" : "Editar"}
        </Button>
      </Section>
    ),
    Aparência: (
      <Section
        title="Aparência"
        description="Personalize a aparência do sistema."
      >
        <Button
          onClick={toggleTheme}
          className="text-sm font-medium bg-foreground p-4 text-background rounded"
        >
          {theme === "light" ? "Modo Noturno" : "Modo Claro"}
        </Button>
        <div className="text-sm text-gray-600 mt-4">
          <p>
            O sistema está no modo{" "}
            <span className="font-semibold text-gray-900">
              {theme === "light" ? "Claro" : "Noturno"}
            </span>
            .
          </p>
        </div>
      </Section>
    ),
  };

  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header
          companyName="Minha Oficina"
          pageTitle="Configurações"
          avatarSrc={null}
        />
        <div className="p-6">
          <nav className="flex gap-4 border-b border-gray-300 pb-4 mb-6">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                className={`text-sm font-medium ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
          {tabs[activeTab]}
        </div>
      </div>
    </div>
  );
}
