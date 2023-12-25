import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./components/Layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])


function App() {

    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
