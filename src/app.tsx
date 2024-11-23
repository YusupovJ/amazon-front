import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "./components/authProvider";
import { MainPage } from "./pages/main";
import { Verify } from "./pages/verify";

export const App = () => {
  return (
    <AuthProvider>
      <Header />
      <Toaster closeButton theme="light" />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Verify />} path="/verify" />
        <Route element={<div>Page Not Found</div>} path="*" />
      </Routes>
    </AuthProvider>
  );
};
