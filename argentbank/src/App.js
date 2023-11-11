import Header from "./components/Header";
import FooterComponents from "./components/Footer";
import { createGlobalStyle } from "styled-components";
import SetRoutes from "./routes/SetRoutes";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader';
import { fetchProfil } from "./services/fetchProfil";

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
  min-height: 100vh;
  min-width:350px;
}
  
#root{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}
`;


  function App() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.authentification.tokenInfos);
    const isLoading = useSelector(state => state.authentification.isLoading);
  
    useEffect(() => {
      if (token) {
        dispatch(fetchProfil(token));
      }
    }, [token, dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <GlobalStyle />
      <Header />
      <SetRoutes/>
      <FooterComponents />
    </>
  );
}

export default App;
