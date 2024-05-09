import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import './App.css';

import Layout      from "./pages/Layout";
import Home        from "./pages/Home";
import Search      from "./pages/Search";
import Inspiration from "./pages/Inspiration";
import AddQuote    from "./pages/AddQuote";
import NoPage      from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter basename="/HIC_Project2">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index              element={<Home />} />
          <Route path="Search"      element={<Search />} />
          <Route path="Inspiration" element={<Inspiration />} />
          <Route path="AddQuote"    element={<AddQuote />} />
          <Route path="*"           element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
