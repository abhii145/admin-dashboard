import { AdminSidebar } from "../components";

const Layout = ({ children }: {
    children: React.ReactNode;
}) => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
