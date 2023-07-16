import { 
  createBrowserRouter,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider
 } from "react-router-dom";
import Home from "./pages/Home/Home";

import RootLayout from "./layouts/RootLayout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import ErrorPage from "./pages/Error404/ErrorPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="gallery" element={<Gallery />}/>
      <Route path="contact-us" element={<Contact />}/>
      <Route path="*" element={<ErrorPage />}/>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App


