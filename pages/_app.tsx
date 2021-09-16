import "../styles/globals.css";
import "../styles/tailwind.css";

import type { AppProps } from "next/app";
import useLocalStorage from "../hooks/useLocalStorage";
import Header from "../src/components/header/Header";
import Container from "../src/Container";
import HeaderProvider from "../src/Context/Header";
import BlogProvider from "../src/Context/Blog";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLightTheme] = useLocalStorage("lightTheme", true);

  return (
    <div className={`${isLightTheme ? "dark" : ""}`}>
      <div className="bg-background-main dark:bg-dark-bg font-body">
        <BlogProvider>
          <HeaderProvider>
            <Container>
              <Header />
            </Container>
            <Component {...pageProps} />
          </HeaderProvider>
        </BlogProvider>
      </div>
    </div>
  );
}
export default MyApp;
