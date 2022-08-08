import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Nav/Navbar";
import { PATHS } from "./constants";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-4 bg-slate-100 min-h-screen">
        <Routes>
          <Route path={PATHS.Home} element={<Home />} />
          <Route path={PATHS.Store} element={<Store />} />
          <Route path={PATHS.About} element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
