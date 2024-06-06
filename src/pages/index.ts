import { lazy } from "react";

const DashBoard = lazy(() => import("./DashBoard"));
const Products = lazy(() => import("./Products"));
const Transactions = lazy(() => import("./Transactions"));
const Customers = lazy(() => import("./Customers"));
const NewProducts = lazy(() => import("./management/NewProducts"));
const ProductManagement = lazy(() => import("./management/ProductManagement"));
const TransactionManagement = lazy(
  () => import("./management/TransactionManagement")
);

const BarCharts = lazy(() => import("./charts/BarCharts"));
const LineCharts = lazy(() => import("./charts/LineCharts"));
const PieCharts = lazy(() => import("./charts/PieCharts"));


const Coupon = lazy(() => import("./apps/Coupon"));

export {
  DashBoard,
  Products,
  Transactions,
  Customers,
  NewProducts,
  ProductManagement,
  TransactionManagement,
  BarCharts,
  LineCharts,
    PieCharts,
  Coupon
};
