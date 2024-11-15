import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { store } from "./store";
import { router } from "./routing";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";

export function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
            <ToastContainer position="bottom-left" autoClose={1500} bodyClassName="text-black" hideProgressBar />
        </Provider>
    );
}
