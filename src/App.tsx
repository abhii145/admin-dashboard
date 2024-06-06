import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  BarCharts,
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
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route path="/admin/dashboard" element={<DashBoard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/transactions" element={<Transactions />} />
            <Route path="/admin/customers" element={<Customers />} />

            <Route path="/admin/chart/bar" element={<BarCharts />} />
            <Route path="/admin/chart/line" element={<LineCharts />} />
            <Route path="/admin/chart/pie" element={<PieCharts />} />

            <Route path="/admin/product/new" element={<NewProducts />} />
            <Route path="/admin/product/:id" element={<ProductManagement />} />
            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default App;
