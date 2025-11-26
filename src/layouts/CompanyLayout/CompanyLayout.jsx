import PropTypes from "prop-types";
import { Layout } from "antd";
import { Sidebar } from "../../Components/SideBar/SideBar.jsx";
import { TopBarCompany } from "../../Components/TopBarCompany/TopBarCompany.jsx";

import "./CompanyLayout.scss";

const { Content } = Layout;

export function CompanyLayout({ children }) {
  return (
    <Layout className="company-layout">
      <TopBarCompany />

      <Layout className="company-body">

        <Sidebar />

        <Layout className="company-content-layout">
          <Content className="company-layout-content">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

CompanyLayout.propTypes = {
  children: PropTypes.node,
};

CompanyLayout.defaultProps = {
  children: <></>,
};
