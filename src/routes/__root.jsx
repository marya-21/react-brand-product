import { Layout } from "antd";
import { createRootRoute, Outlet } from "@tanstack/react-router";

const { Header, Content, Footer } = Layout;

export const Route = createRootRoute({
  component: () => (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "#fff",
          padding: "0 24px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ margin: 0, color: "#1677ff" }}>Brand Products</h1>
      </Header>
      <Content
        style={{
          padding: "24px",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        ©{new Date().getFullYear()} Created by M Arya Syaifullah
      </Footer>
    </Layout>
  ),
});
