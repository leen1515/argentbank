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

/**
 * @namespace UI
 */

/**
 * The root component of the application.
 *
 * `App` is responsible for initializing the application, including fetching user profiles
 * if a token is available. It sets up the global styles, header, routing, and footer of the application.
 * It also handles the display of the Loader component based on the global loading state.
 *
 * @name AppComponent
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
  function App() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.authentification.tokenInfos);
    const isLoading = useSelector(state => state.authentification.isLoading);
    /**
     * Effect to fetch user profile based on the presence of a token.
     */
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
