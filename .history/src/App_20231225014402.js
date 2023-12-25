import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
            },
            {
                path: "/addnew",
                element: <AddNew />
            }
        ]
    }
])


function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
