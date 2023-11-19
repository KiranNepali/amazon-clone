import { productsData } from "./api/Api";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Home/Banner";
import { Home } from "./pages/Home";

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  useLoaderData,
} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={productsData}></Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
