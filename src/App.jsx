import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ConfigProvider, theme } from "antd";
import { routeTree } from "./routeTree.gen";
import "./App.css";

const router = createRouter({ routeTree });

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#1677ff",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
