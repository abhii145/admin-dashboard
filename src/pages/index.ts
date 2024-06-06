import { lazy } from "react";

const DashBoard = lazy(() => import("./DashBoard"));
const Products = lazy(() => import("./Products"));
const Transactions = lazy(() => import("./Transactions"));
const Customers = lazy(() => import("./Customers"));
const NewProducts = lazy(() => import("./management/NewProducts"));
const ProductManagement = lazy(() => import("./management/ProductManagement"));
const TransactionManagement = lazy(() => import("./management/TransactionManagement"));

export { DashBoard, Products, Transactions, Customers, NewProducts, ProductManagement, TransactionManagement};