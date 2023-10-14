import Header from "./components/Header";
import FooterComponents from "./components/Footer";
import { createGlobalStyle } from "styled-components";
import SetRoutes from "./routes/SetRoutes";
import { Provider } from 'react-redux';
import store from './store/store'; 

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
  justify-content: space-between;
  min-height: 100vh;}
  
#root{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}
`;



function App() {
  return (
    <> <GlobalStyle /><Provider store={store}>
    <Header />
    <SetRoutes/>
    <FooterComponents /></Provider>
    </>
    
);
}

export default App;
