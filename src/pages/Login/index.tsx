import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import imageLogin from "../../assets/Login_img.png";
import api from "@/services";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useFormik } from "formik";
import {
  initialLoginFormValues,
  loginFormSchema,
} from "@/schema/loginForm.schema";

interface ILogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleFormikLogin = useFormik({
    initialValues: initialLoginFormValues,
    validationSchema: loginFormSchema,
    onSubmit: async (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values: ILogin) => {
    try {
      await api.post("/auth/login", values);
      toast.success("Usuário logado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Falha ao logar, verifique suas credenciais!");
    }
  };

  return (
    <>
      <form onSubmit={handleFormikLogin.handleSubmit}>
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

              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={handleFormikLogin.values.email}
                    placeholder="Insira seu email"
                    onChange={handleFormikLogin.handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  {handleFormikLogin.errors?.email &&
                    handleFormikLogin.touched?.email && (
                      <span className="text-red-500 text-sm">
                        {handleFormikLogin.errors.email}
                      </span>
                    )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium"
                  >
                    Senha
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={handleFormikLogin.values.password}
                      placeholder="Insira sua senha"
                      onChange={handleFormikLogin.handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                    {handleFormikLogin.errors?.password &&
                      handleFormikLogin.touched?.password && (
                        <span className="text-red-500 text-sm">
                          {handleFormikLogin.errors.password}
                        </span>
                      )}
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

              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
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
      </form>
    </>
  );
};

export default Login;
