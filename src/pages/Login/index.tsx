import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import imageLogin from "../../assets/Login_img.png";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div
        className="hidden lg:flex w-1/2 h-full bg-cover bg-center rounded-tr-[40px] rounded-br-[40px]"
        style={{
          backgroundImage: `url(${imageLogin})`,
        }}
      ></div>

      <div className="flex flex-1 flex-col justify-center items-center p-8 lg:p-16">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-8">
              <img src="/autolog.png" alt="Autolog" className="h-8" />
              <span className="text-2xl font-semibold">Autolog</span>
            </div>
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500">
              Insira seus dados para acessar sua área de gerenciamento!
            </p>
          </div>

          <form>
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Digite seu email" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Senha
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 px-3 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 mt-6 bg-black text-white"
            >
              Entrar
            </Button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Esqueceu sua senha?
            </a>
          </div>
          <div className="mt-2 text-center text-sm">
            Ainda não possui uma conta?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Crie uma conta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
