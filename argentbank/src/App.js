import Header from "./components/Header";
import FooterComponents from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import { createGlobalStyle } from "styled-components";
import { Routes, Route } from 'react-router';
// import PrivateRoute from "./routes/PrivateRoute";
// import Dashboard from "./pages/Dashboard";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding:0;
}  
body{
margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;}
`;



function App() {
  return (
    <> <GlobalStyle />
    <Header />
     <Routes>
      <Route path="/" element={<LandingPage/>} />
    </Routes>
    <FooterComponents />
    </>
    
);
}

export default App;
