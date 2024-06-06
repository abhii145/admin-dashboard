import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  BarCharts,
  Coupon,
  Customers,
  DashBoard,
  LineCharts,
  NewProducts,
  PieCharts,
  ProductManagement,
  Products,
  TransactionManagement,
  Transactions,
} from "./pages";
import { Suspense } from "react";
import Loader from "./components/Loader";
import { AdminSidebar } from "./components";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <div className="flex h-screen">
          <AdminSidebar />
          <div className="flex-grow p-6 bg-gray-100">
            <Routes>
              <Route path="/admin/dashboard" element={<DashBoard />} />
              <Route path="/admin/product" element={<Products />} />
              <Route path="/admin/transactions" element={<Transactions />} />
              <Route path="/admin/customers" element={<Customers />} />

              <Route path="/admin/product/new" element={<NewProducts />} />
              <Route
                path="/admin/product/:id"
                element={<ProductManagement />}
              />
              <Route
                path="/admin/transaction/:id"
                element={<TransactionManagement />}
              />

              <Route path="/admin/chart/bar" element={<BarCharts />} />
              <Route path="/admin/chart/line" element={<LineCharts />} />
              <Route path="/admin/chart/pie" element={<PieCharts />} />

              <Route path="/admin/app/coupon" element={<Coupon />} />
            </Routes>
          </div>
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
