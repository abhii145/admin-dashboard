import SidebarList from "./SidebarList";
import { AppsData, ChartsData, sidebarListData } from "../constants";
import { Location, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";

const AdminSidebar = () => {
  const location = useLocation();

    const [showModal, setShowModal] = useState<boolean>(false);
    const [phoneActive, setPhoneActive] = useState<boolean>(
      window.innerWidth < 1100
    );

    const resizeHandler = () => {
      setPhoneActive(window.innerWidth < 1100);
    };

    useEffect(() => {
      window.addEventListener("resize", resizeHandler);

      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }, []);


  return (

      <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Logo.</h2>
         <DashBoardDiv location={location} />
      <ChartDiv location={location} />
      <AppDiv location={location} />

        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};


const DashBoardDiv = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>DashBoard</h5>
      <ul>
        {sidebarListData.map((item, index) => (
          <SidebarList
            key={index}
            url={item.url}
            text={item.text}
            Icon={item.Icon}
            location={location}
          />
        ))}
      </ul>
    </div>
  );
};

const ChartDiv = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Charts</h5>
      <ul>
        {ChartsData.map((item, index) => (
          <SidebarList
            key={index}
            url={item.url}
            text={item.text}
            Icon={item.Icon}
            location={location}
          />
        ))}
      </ul>
    </div>
  );
};

const AppDiv = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>App</h5>
      <ul>
        {AppsData.map((item, index) => (
          <SidebarList
            key={index}
            url={item.url}
            text={item.text}
            Icon={item.Icon}
            location={location}
          />
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;
