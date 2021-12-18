
import Login from './pages/Login/Login'
import Main from "../src/pages/Main/Main"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRoutes,
} from "react-router-dom";
import Register from './pages/Register/Register';
import Layout from "../src/Layout/Layout"


const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Main /> },
    ],
  },
]
function App() {
            const elements = useRoutes(routes);
            return elements
}

export default App;





