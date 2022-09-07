import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Info from "./screens/Info";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/info' element={<Info/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
