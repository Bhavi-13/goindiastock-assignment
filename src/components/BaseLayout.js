import Sidebar from "./Sidebar";

const BaseLayout = ({ children }) => {
  return (
    <div className="layout flex relative h-screen gap-8">
      <Sidebar />
      <main className="layout__main-content flex-grow-1">{children}</main>
    </div>
  );
};

export default BaseLayout;