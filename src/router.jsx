import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Index from "./pages";
import Show from "./pages/show";
import Landing from "./pages/landing";
import { indexLoader, showLoader } from "./loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} />
      <Route path="/index" element={<Index />} loader={indexLoader} />
      <Route path="/:id" element={<Show />} loader={showLoader} />
    </Route>
  )
);

export default router;
