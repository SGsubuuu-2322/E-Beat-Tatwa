import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import LoginDetails from "./Pages/LoginDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login/details" element={<LoginDetails />} />
      </Routes>
    </>
  );
}

export default App;
