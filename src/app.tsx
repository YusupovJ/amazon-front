import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route element={<div>Hello world</div>} path="/" />
    </Routes>
  );
};
