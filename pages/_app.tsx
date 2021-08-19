import "../styles/globals.css";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import useLocalStorage from "../hooks/useLocalStorage";
import Header from "../src/components/header/Header";
import Container from "../src/Container";
import HeaderProvider from "../src/Context/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLightTheme] = useLocalStorage("lightTheme", true);
  return (
    <div className={`${isLightTheme ? "" : "dark"}`}>
      <div className="bg-background-main dark:bg-dark-bg font-body">
        <HeaderProvider>
          <Container>
            <Header />
          </Container>
          <Component {...pageProps} />
        </HeaderProvider>
      </div>
    </div>
  );
}
export default MyApp;
