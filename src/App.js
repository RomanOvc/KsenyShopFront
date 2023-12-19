import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./views/SignIn";
import Register from "./views/Register";
import HomePage from "./views/HomePage/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<HomePage />} />
        </Routes>

        <Routes>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/register" element={<Register/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
