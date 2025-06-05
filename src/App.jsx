import { Layout, Menu, Typography } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <div style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Brand & Product App
        </div>
      </Header>
      <Content style={{ padding: "24px 48px" }}>
        <Typography.Title level={2}>
          Welcome to Brand & Product App
        </Typography.Title>
        {/* Komponen daftar brand, product, dan detail product akan diletakkan di sini */}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Brand & Product App ©2024 Created with Ant Design
      </Footer>
    </Layout>
  );
}

export default App;
