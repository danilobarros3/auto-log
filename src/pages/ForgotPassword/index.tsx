import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import api from "@/services";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ForgotPasswordDialogProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const ForgotPasswordDialog = ({
  isOpen,
  onClose,
}: ForgotPasswordDialogProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post(`/auth/forgot-password?email=${email}`);
      if (response.status === 200) {
        toast.success("E-mail enviado com sucesso! Verifique seu e-mail.");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error("Falha ao enviar o e-mail, tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogOverlay className="bg-black bg-opacity-30" />
      <DialogContent className="w-full sm:w-96 p-6 rounded-xl shadow-lg bg-white justify-center">
        <DialogHeader className="text-center text-2xl font-semibold mb-4 text-gray-800">
          Esqueceu a Senha?
        </DialogHeader>
        <div className="mb-4">
          <p className="text-gray-600 text-sm text-center">
            Insira seu e-mail para receber as instruções de recuperação de
            senha.
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
            <div id="email" className="mb-4">
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-3 w-full border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>
        <DialogFooter className="flex justify-center gap-4">
          <button
            onClick={handleClose}
            disabled={loading}
            className="w-full sm:w-auto border border-red-500 text-red-500 hover:text-white px-3 rounded hover:bg-red-500 text-foreground text-sm"
          >
            Fechar
          </button>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={loading || !email}
            className="w-full sm:w-auto bg-green-500 text-white hover:bg-green-400"
          >
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordDialog;
