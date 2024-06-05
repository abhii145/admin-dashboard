import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Customers, DashBoard, Products, Transactions } from "./pages";
import { Suspense } from "react";
import Loader from "./components/Loader";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<DashBoard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route path="/admin/customers" element={<Customers />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
