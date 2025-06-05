import { createFileRoute } from "@tanstack/react-router";
import { Row, Col, Typography, Breadcrumb, Button, Space, Tag } from "antd";
import { Link } from "@tanstack/react-router";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export const Route = createFileRoute("/products/$productId")({
  component: ProductDetail,
});

function ProductDetail() {
  const { productId } = Route.useParams();

  // Mock data - replace with actual API call
  const product = {
    id: productId,
    name: "Air Max 270",
    price: 150,
    description:
      "The Nike Air Max 270 delivers visible cushioning under every step. The large window and plush, flexible cushioning let you ride in comfort.",
    image: "https://example.com/airmax270.png",
    features: [
      "Breathable mesh upper",
      "Foam midsole",
      "Rubber outsole",
      "Visible Air unit",
    ],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    colors: ["Black", "White", "Red"],
    brand: {
      id: 1,
      name: "Nike",
    },
  };

  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: (
              <Link to="/">
                <HomeOutlined />
              </Link>
            ),
          },
          {
            title: (
              <Link
                to="/brands/$brandId/products"
                params={{ brandId: product.brand.id }}
              >
                {product.brand.name}
              </Link>
            ),
          },
          {
            title: product.name,
          },
        ]}
        style={{ marginBottom: 24 }}
      />

      <Row gutter={[48, 48]}>
        <Col xs={24} md={12}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", borderRadius: 8 }}
          />
        </Col>
        <Col xs={24} md={12}>
          <Title level={2}>{product.name}</Title>
          <Title level={3} style={{ color: "#1677ff" }}>
            ${product.price}
          </Title>

          <Paragraph>{product.description}</Paragraph>

          <div style={{ marginTop: 24 }}>
            <Title level={4}>Features</Title>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: 24 }}>
            <Title level={4}>Available Sizes</Title>
            <Space wrap>
              {product.sizes.map((size) => (
                <Button key={size}>{size}</Button>
              ))}
            </Space>
          </div>

          <div style={{ marginTop: 24 }}>
            <Title level={4}>Available Colors</Title>
            <Space wrap>
              {product.colors.map((color) => (
                <Tag key={color} color={color.toLowerCase()}>
                  {color}
                </Tag>
              ))}
            </Space>
          </div>

          <Button
            type="primary"
            size="large"
            icon={<ShoppingCartOutlined />}
            style={{ marginTop: 32, width: "100%" }}
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
    </div>
  );
}
