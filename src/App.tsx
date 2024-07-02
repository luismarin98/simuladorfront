import { Route, Routes } from "react-router-dom";
import { Dashboard_Route, Home_Route, NotFound_Route } from "./Routes";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="dark:bg-neutral-800 dark:text-white w-screen h-screen rubik">
      <div className="flex justify-between items-center flex-col gap-2 w-full h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home_Route />} />
          <Route path="/dashboard" element={<Dashboard_Route />}>
            <Route path=":user_id" element={<Dashboard_Route />} />
            <Route path=":user_id/profile" element={<Dashboard_Route />} />
            <Route path=":user_id/simulador" element={<Dashboard_Route />} />
            <Route path=":user_id/cuestionarios" element={<Dashboard_Route />} />
          </Route>
          <Route path="/*" element={<NotFound_Route />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
