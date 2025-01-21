import { Route, Routes } from "react-router";

import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/accelerate-sl">
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
