import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<div>Hello world</div>} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<div>Page Not Found</div>} path="*" />
      </Routes>
    </>
  );
};
