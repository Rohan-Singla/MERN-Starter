import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApiTest from "./components/ApiTest";

function App() {
  return (
    <Router>
      <Routes>
        {/* {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<ApiTest />} /> 
      </Routes>
    </Router>
  );
}

export default App;
