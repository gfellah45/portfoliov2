import "../styles/globals.css";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import useLocalStorage from "../hooks/useLocalStorage";
import Header from "../src/components/header/Header";
import Container from "../src/Container";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLightTheme] = useLocalStorage("lightTheme", true);
  return (
    <div className={`${isLightTheme ? "" : "dark"}`}>
      <div className="bg-background-main dark:bg-dark-bg font-body">
        <Container>
          <Header />
        </Container>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
