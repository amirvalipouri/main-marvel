
import Login from './pages/Login/Login'
import Main from "../src/pages/Main/Main"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRoutes,
} from "react-router-dom";

import Layout from "../src/Layout/Layout";
import Server from './pages/ServerPage/Server';
import Profile from './pages/Profile/Profile';


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
      { path : '/server' , element : <Server/>  },
      { path : '/profile' , element : <Profile />}
    ],
  },
]
function App() {
            const elements = useRoutes(routes);
            return elements
}

export default App;





