import { SidebarProvider } from "../context/SliderContext";
import '../app/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}