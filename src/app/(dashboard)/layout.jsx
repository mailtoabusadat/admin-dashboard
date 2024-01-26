import Content from "@/components/common/Content";
export default function DashboardLayout({ children, sidebar, app_bar }) {
  return (
    <>
      {sidebar}
      {app_bar}
      <Content>{children}</Content>
    </>
  );
}
