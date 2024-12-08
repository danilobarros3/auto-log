import Router from "./router";
import { AuthProvider } from "./context/authContext";

export function App() {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
}
