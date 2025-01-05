import { Route, Routes } from "react-router";

import HomePage from "./views/HomePage";

function App() {
  return (
    <Routes>
      <Route path="accelerate-sl/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
