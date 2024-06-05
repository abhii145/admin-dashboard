import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";

const sidebarListData = [
  {
    url: "/admin/dashboard",
    text: "Dashboard",
    Icon: RiDashboardFill,
  },
  {
    url: "/admin/product",
    text: "Product",
    Icon: RiShoppingBag3Fill,
  },
  {
    url: "/admin/customers",
    text: "Customer",
    Icon: IoIosPeople,
  },
  {
    url: "/admin/transactions",
    text: "Transaction",
    Icon: AiFillFileText,
  },
];


const ChartsData = [
  {
    url: "/admin/chart/bar",
    text: "Bar",
    Icon: FaChartBar,
  },
  {
    url: "/admin/chart/pie",
    text: "Pie",
    Icon: FaChartPie,
  },
  {
    url: "/admin/chart/line",
    text: "Line",
    Icon: FaChartLine,
  }
];

const AppsData = [
  {
    url: "/admin/app/stopwatch",
    text: "Stopwatch",
    Icon: FaStopwatch,
  },
  {
    url: "/admin/app/coupon",
    text: "coupon",
    Icon: RiCoupon3Fill,
  },
  {
    url: "/admin/app/toss",
    text: "toss",
    Icon: FaGamepad,
  },
];


export { sidebarListData, ChartsData, AppsData };
