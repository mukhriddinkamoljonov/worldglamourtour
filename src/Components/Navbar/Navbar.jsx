import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import Title from "antd/lib/skeleton/Title";

const { Header, Content, Footer } = Layout;

const Navbar = () => {
  return (
    <div>
      <Layout className="layout">
        <div className="row">
          <div className="col-lg-6">
            <i class="fa-solid fa-plane-departure"></i>{" "}
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="col-lg-6">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-telegram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <Content style={{ padding: "0 100px" ,margin: 0}}>
          <Header className="header">
            <div className="logo" />
            <Menu theme="white" mode="horizontal" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
      ,
    </div>
  );
};
export default Navbar;
