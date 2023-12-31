import "@/styles/globals.css";
import "@/styles/ExploreSlider.css";
import { Provider } from "react-redux";
import store from "../components/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
