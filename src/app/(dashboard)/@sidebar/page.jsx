import BrandNameLogo from "@/components/common/BrandNameLogo";
import DashboardSidebarNav from "@/components/nav/DashboardSidebarNav";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import adminNavItems from "@/utility/admin-nav-Items";
export default function Sidebar() {
  return (
    <LeftSidebar>
      <BrandNameLogo />
      <DashboardSidebarNav navItems={adminNavItems} />
    </LeftSidebar>
  );
}
