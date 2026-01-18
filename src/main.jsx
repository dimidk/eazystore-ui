import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { loaderProducts } from "./components/Home.jsx";

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} loader={loaderProducts} />
    <Route path="/home" element={<Home />} loader={loaderProducts} />
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
);

const appRouter = createBrowserRouter(routeDefinitions);

//const appRouter = createBrowserRouter([
// {
//   path: "/",
//   element: <App />,
//   errorElement: <ErrorPage />,
//   children: [
//     {
//       index: true,
//       element: <Home />,
//     },
//     {
//       path: "/home",
//       element: <Home />,
//     },
//     {
//       path: "/about",
//       element: <About />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/contact",
//       element: <Contact />,
//     },
//   ],
// },
//]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
