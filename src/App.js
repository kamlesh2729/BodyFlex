// import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/Nav/Navbar"

function App() {
  return (
    // <AuthContextProvider>
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    // </AuthContextProvider>
  );
}

export default App;
