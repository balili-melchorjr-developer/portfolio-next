import "@/styles/globals.css";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: ['400', '100', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export default function App({ Component, pageProps }) { 

  return(
    <main className={montserrat.className}>
      <Component {...pageProps} />;
    </main>    
  ) 
  
}
