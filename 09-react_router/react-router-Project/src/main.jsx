import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Github, { githubInfo } from "./components/Github.jsx";
import User from "./components/User.jsx";

/** first method for create routes */

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children:[
//       {path:'',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       },
//       {
//         path: 'github',
//         element: <Github />
//       }
//     ]
//   }
// ])

/** second method of create routes */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={githubInfo} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
