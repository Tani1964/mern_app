import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header/>
          <Routes>
            {/* with react router 6 you can't have anything within the route tag unless it's a route */}
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
