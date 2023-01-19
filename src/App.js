import AuthProvider from "./Contexts/AuthContext";
import RoutesApp from "./Routes";
import './index.css'

function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
}

export default App;
