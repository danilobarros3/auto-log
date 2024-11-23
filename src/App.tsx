import { AuthProvider } from "./context/authContext";
import Router from "./router";

function App() {
  return (
    <AuthProvider>
      <div className="bg-gray-200">
        <Router />
      </div>
    </AuthProvider>
  );
}

export default App;
