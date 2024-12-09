import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import imageLogin from "@/assets/register-img.png";

const Register: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(2);
    };

    const handlePrevStep = () => {
        setStep(1);
    };

    return (
        <div className="flex min-h-screen">
            <img src={imageLogin} alt="Carro do login" className="w-1/2 object-cover" />

            <div className="flex flex-1 flex-col justify-center items-center p-8 lg:p-16">
                <div className="max-w-md w-full">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-8">
                            <img src="/autolog.png" alt="Autolog" className="h-8" />
                            <span className="text-2xl font-semibold">Autolog</span>
                        </div>
                    </div>

                    <h1 className="text-2xl font-medium text-black mb-4">
                        {step === 1 ? "Cadastro - Informações do Usuário" : "Cadastro - Informações da Oficina"}
                    </h1>
                    <p className="text-sm text-gray-600 mb-6">
                        {step === 1
                            ? "Insira seus dados pessoais para criar sua conta!"
                            : "Agora, adicione as informações da sua oficina!"}
                    </p>

                    {step === 1 && (
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium">
                                    Nome
                                </label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Seu nome completo"
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="cnpj" className="block text-sm font-medium">
                                    CNPJ
                                </label>
                                <Input
                                    type="text"
                                    id="cnpj"
                                    name="cnpj"
                                    placeholder="Digite seu CNPJ"
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email
                                </label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Digite seu email"
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium">
                                    Senha
                                </label>
                                <div className="relative">
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="Digite sua senha"
                                        className="mt-1"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                                        aria-label="Mostrar ou ocultar senha"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium">
                                    Confirmar Senha
                                </label>
                                <div className="relative">
                                    <Input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirme sua senha"
                                        className="mt-1"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                                        aria-label="Mostrar ou ocultar senha de confirmação"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <Button
                                type="button"
                                className="w-full h-12 bg-black text-white"
                                onClick={handleNextStep}
                            >
                                Avançar
                            </Button>
                        </form>
                    )}

                    {step === 2 && (
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="nameWorkshop" className="block text-sm font-medium">
                                    Nome da Oficina
                                </label>
                                <Input
                                    type="text"
                                    id="nameWorkshop"
                                    name="nameWorkshop"
                                    placeholder="Digite o nome da sua oficina"
                                    className="mt-1"
                                />
                            </div>

                            <div>
                                <label htmlFor="addressWorkshop" className="block text-sm font-medium">
                                    Endereço da Oficina
                                </label>
                                <Input
                                    type="text"
                                    id="addressWorkshop"
                                    name="addressWorkshop"
                                    placeholder="Digite o endereço da oficina"
                                    className="mt-1"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 bg-black text-white"
                            >
                                Concluir Cadastro
                            </Button>

                            <div className="text-center mt-4">
                                <button
                                    type="button"
                                    onClick={handlePrevStep}
                                    className="text-black hover:underline"
                                >
                                    Voltar
                                </button>
                            </div>
                        </form>
                    )}

                    <p className="text-sm text-gray-600 mt-6 text-center">
                        Já tem uma conta?{" "}
                        <a href="/login" className="text-blue-500 hover:underline transition">
                            Faça login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
