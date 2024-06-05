import { lazy } from "react";

const DashBoard = lazy(() => import("./DashBoard"));
const Products = lazy(() => import("./Products"));
const Transactions = lazy(() => import("./Transactions"));
const Customers = lazy(() => import("./Customers"));



export {DashBoard, Products, Transactions, Customers}