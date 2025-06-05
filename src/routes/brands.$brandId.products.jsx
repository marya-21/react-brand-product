import { createFileRoute } from "@tanstack/react-router";
import { Row, Col, Card, Typography, Breadcrumb } from "antd";
import { Link } from "@tanstack/react-router";
import { HomeOutlined } from "@ant-design/icons";

const { Title } = Typography;

export const Route = createFileRoute("/brands/$brandId/products")({
  component: BrandProducts,
});

function BrandProducts() {
  const { brandId } = Route.useParams();

  // Mock data - replace with actual API call
  const brand = {
    id: brandId,
    name: "Nike",
    description: "Just Do It",
  };

  const products = [
    {
      id: 1,
      name: "Air Max 270",
      price: 150,
      shortDescription:
        "The Nike Air Max 270 delivers visible cushioning under every step.",
      image: "https://example.com/airmax270.png",
    },
    {
      id: 2,
      name: "Air Force 1",
      price: 100,
      shortDescription: "The radiance lives on in the Nike Air Force 1.",
      image: "https://example.com/airforce1.png",
    },
  ];

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
            title: brand.name,
          },
        ]}
        style={{ marginBottom: 24 }}
      />

      <Title level={2}>{brand.name} Products</Title>
      <Typography.Paragraph>{brand.description}</Typography.Paragraph>

      <Row gutter={[24, 24]}>
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={product.name}
                  src={product.image}
                  style={{ height: 200, objectFit: "cover" }}
                />
              }
            >
              <Card.Meta
                title={product.name}
                description={
                  <>
                    <Typography.Text strong style={{ color: "#1677ff" }}>
                      ${product.price}
                    </Typography.Text>
                    <br />
                    {product.shortDescription}
                  </>
                }
              />
              <Link
                to="/products/$productId"
                params={{ productId: product.id }}
                style={{ marginTop: 16, display: "block" }}
              >
                View Details
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
