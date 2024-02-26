import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}
