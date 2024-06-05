import SidebarList from "./SidebarList";
import { AppsData, ChartsData, sidebarListData } from "../constants";
import { Location, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside>
      <h2>Logo.</h2>

      <DashBoardDiv location={location} />
      <ChartDiv location={location} />
      <AppDiv location={location} />
    </aside>
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
