import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
    <Header />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <Footer />
    </>
    
);
}

export default App;
