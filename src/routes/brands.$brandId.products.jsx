import { createFileRoute } from "@tanstack/react-router";
import { Card, Typography, Breadcrumb } from "antd";
import { Link } from "@tanstack/react-router";
import { HomeOutlined } from "@ant-design/icons";
import CardPaginate from "../components/global/CardPaginate";

const { Title } = Typography;

export const Route = createFileRoute("/brands/$brandId/products")({
  component: BrandProducts,
});

const MyCustomCard = (product) => (
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
);

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
      name: "Nike Air Max 90",
      price: 1500000,
      shortDescription:
        "Sepatu ikonik dengan bantalan Air Max untuk kenyamanan sepanjang hari.",
      image: "https://example.com/images/nike-air-max-90.jpg",
    },
    {
      id: 2,
      name: "Nike Air Force 1",
      price: 1400000,
      shortDescription: "Desain klasik dengan gaya streetwear yang abadi.",
      image: "https://example.com/images/nike-air-force-1.jpg",
    },
    {
      id: 3,
      name: "Nike ZoomX Vaporfly Next%",
      price: 3200000,
      shortDescription:
        "Dirancang untuk pelari profesional dengan teknologi ZoomX.",
      image: "https://example.com/images/nike-zoomx-vaporfly.jpg",
    },
    {
      id: 4,
      name: "Nike Dunk Low",
      price: 1300000,
      shortDescription: "Gaya retro dengan pilihan warna yang menarik.",
      image: "https://example.com/images/nike-dunk-low.jpg",
    },
    {
      id: 5,
      name: "Nike React Infinity Run",
      price: 1700000,
      shortDescription:
        "Sepatu lari dengan kenyamanan ekstra dan desain modern.",
      image: "https://example.com/images/nike-react-infinity.jpg",
    },
    {
      id: 6,
      name: "Nike Blazer Mid '77",
      price: 1250000,
      shortDescription:
        "Sentuhan vintage dengan bahan kulit berkualitas tinggi.",
      image: "https://example.com/images/nike-blazer-mid.jpg",
    },
    {
      id: 7,
      name: "Nike Pegasus 40",
      price: 1600000,
      shortDescription:
        "Pilihan terbaik untuk pelari jarak jauh dengan performa stabil.",
      image: "https://example.com/images/nike-pegasus-40.jpg",
    },
    {
      id: 8,
      name: "Nike Free Run 5.0",
      price: 1200000,
      shortDescription: "Ringan dan fleksibel, cocok untuk lari santai.",
      image: "https://example.com/images/nike-free-run-5.jpg",
    },
    {
      id: 9,
      name: "Nike SB Dunk High",
      price: 1450000,
      shortDescription:
        "Dirancang untuk skateboarder dengan daya tahan ekstra.",
      image: "https://example.com/images/nike-sb-dunk-high.jpg",
    },
    {
      id: 10,
      name: "Nike Air Jordan 1",
      price: 2500000,
      shortDescription: "Sepatu legendaris dengan sejarah dan gaya yang kuat.",
      image: "https://example.com/images/nike-air-jordan-1.jpg",
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

      <CardPaginate dataCard={products} customCard={MyCustomCard} />
    </div>
  );
}
