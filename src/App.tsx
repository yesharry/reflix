import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home/:listType/:id" element={<Home />} />

        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/:listType/:id" element={<Tv />} />

        <Route path="/search" element={<Search />} />
        <Route path="/search/:listName/:id" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
