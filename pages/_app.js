import "@/styles/globals.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";

export default function App({ Component, pageProps }) { 

  return(
    <main>
    <ThemeProvider theme={theme}>
       <Component {...pageProps} />
    </ThemeProvider>      
    </main>    
  ) 
  
}
