import { Toaster } from "sonner";
import Router from "./router";

export function App() {
  return (
    <>
      <Router/>
      <Toaster richColors />
    </>
  );
}
