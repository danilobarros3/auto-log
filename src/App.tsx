import { Toaster } from "sonner";
import Router from "./router";
import { AuthProvider } from "./context/authContext";

export function App() {
  return (
    <>
      <AuthProvider>
        <Router />
        <Toaster richColors />
      </AuthProvider>
    </>
  );
}
