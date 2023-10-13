import "./App.css";
import LoginPage from "./pages/Login";
import { Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Register";
import NotFound from "./components/NotFound";
import RegisterFormPage from "./components/RegisterForm";
import { Login_Page, Register_Form, Register_Page, Not_Found } from "./helper";
import TimelinePage from "./components/pages/timeline/timeline";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path={Login_Page} element={<LoginPage />} />
          <Route path={Register_Form} element={<RegisterFormPage />} />
          <Route path={Register_Page} element={<RegisterPage />} />
          <Route path={Not_Found} element={<NotFound />} />
          <Route path="/timeline" element={<TimelinePage/>}> </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
