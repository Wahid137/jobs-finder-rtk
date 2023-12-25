import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./components/Layout/Main";
import AddNew from "./pages/AddNew/AddNew";
import EditJob from "./pages/EditJob/EditJob";

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
            },
            {
                path: "/editjob",
                element: <EditJob />
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
