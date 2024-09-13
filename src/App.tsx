import { Route, Routes } from "react-router-dom";
import { DASHBOARD_ROUTE, HOME_ROUTE, NOTFOUND_ROUTE } from "./Routes";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="dark:bg-neutral-800 dark:text-white w-screen h-screen rubik">
      <div className="flex justify-between items-center flex-col gap-2 w-full h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<HOME_ROUTE />} />
          <Route path="/dashboard" element={<DASHBOARD_ROUTE />}>
            <Route path=":user_id" element={<DASHBOARD_ROUTE />} />
            <Route path=":user_id/profile" element={<DASHBOARD_ROUTE />} />
            <Route path=":user_id/simulador" element={<DASHBOARD_ROUTE />} />
            <Route path=":user_id/cuestionarios" element={<DASHBOARD_ROUTE />} />
          </Route>
          <Route path="/*" element={<NOTFOUND_ROUTE />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
