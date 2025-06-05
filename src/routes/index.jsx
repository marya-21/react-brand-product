import { createFileRoute } from "@tanstack/react-router";
import { Row, Col, Card, Typography } from "antd";
import { Link } from "@tanstack/react-router";
import CardPaginate from "../components/global/CardPaginate";

const { Title } = Typography;

export const Route = createFileRoute("/")({
  component: Index,
});

const MyCustomCard = (brand) => (
  <Card
    hoverable
    cover={
      <img
        alt={brand.name}
        src={brand.logo}
        style={{ height: 200, objectFit: "contain", padding: "20px" }}
      />
    }
  >
    <Card.Meta title={brand.name} description={brand.description} />
    <Link
      to="/brands/$brandId/products"
      params={{ brandId: brand.id }}
      style={{ marginTop: 16, display: "block" }}
    >
      View Products
    </Link>
  </Card>
);

function Index() {
  // Mock data - replace with actual API call
  const brands = [
    {
      id: 1,
      name: "Nike",
      description: "Just Do It",
      logo: "https://example.com/nike-logo.png",
    },
    {
      id: 2,
      name: "Adidas",
      description: "Impossible Is Nothing",
      logo: "https://example.com/adidas-logo.png",
    },
    {
      id: 3,
      name: "Puma",
      description:
        "Puma is known for creating sportswear and athletic shoes with a perfect blend of comfort and style.",
      logo: "https://example.com/logos/puma.png",
    },
    {
      id: 4,
      name: "Reebok",
      description:
        "Reebok focuses on fitness and sport, offering shoes designed to provide support and durability.",
      logo: "https://example.com/logos/reebok.png",
    },
    {
      id: 5,
      name: "Under Armour",
      description:
        "Under Armour is a leading performance footwear brand, providing shoes built for intense sports and workouts.",
      logo: "https://example.com/logos/underarmour.png",
    },
    {
      id: 6,
      name: "New Balance",
      description:
        "New Balance is known for its high-performance running shoes and a focus on comfort and technology.",
      logo: "https://example.com/logos/newbalance.png",
    },
    {
      id: 7,
      name: "Skechers",
      description:
        "Skechers offers stylish, comfortable footwear with innovative designs for both casual and athletic wear.",
      logo: "https://example.com/logos/skechers.png",
    },
    {
      id: 8,
      name: "Vans",
      description:
        "Vans is a skateboarding and lifestyle brand, offering iconic shoes for casual and extreme sports wearers.",
      logo: "https://example.com/logos/vans.png",
    },
    {
      id: 9,
      name: "Asics",
      description:
        "Asics is a global brand that creates high-performance running shoes, focusing on comfort and technology.",
      logo: "https://example.com/logos/asics.png",
    },
    {
      id: 10,
      name: "Saucony",
      description:
        "Saucony specializes in running shoes that combine comfort, durability, and support for all levels of athletes.",
      logo: "https://example.com/logos/saucony.png",
    },
    {
      id: 11,
      name: "Brooks",
      description:
        "Brooks designs running shoes for both professionals and casual runners with an emphasis on cushioning and support.",
      logo: "https://example.com/logos/brooks.png",
    },
    {
      id: 12,
      name: "Fila",
      description:
        "Fila offers shoes that combine retro-inspired designs with modern performance technologies.",
      logo: "https://example.com/logos/fila.png",
    },
    {
      id: 13,
      name: "Converse",
      description:
        "Converse is a classic brand known for its timeless Chuck Taylor sneakers that fit both casual and street style.",
      logo: "https://example.com/logos/converse.png",
    },
    {
      id: 14,
      name: "K-Swiss",
      description:
        "K-Swiss is known for its stylish and performance-driven tennis shoes that offer comfort and durability.",
      logo: "https://example.com/logos/kswiss.png",
    },
    {
      id: 15,
      name: "Hoka One One",
      description:
        "Hoka One One designs running shoes with maximum cushioning, ideal for long-distance runners seeking comfort.",
      logo: "https://example.com/logos/hoka.png",
    },
    {
      id: 16,
      name: "Merrell",
      description:
        "Merrell is a brand that specializes in outdoor footwear, offering shoes for hiking, trail running, and outdoor exploration.",
      logo: "https://example.com/logos/merrell.png",
    },
    {
      id: 17,
      name: "Timberland",
      description:
        "Timberland is known for durable and high-quality outdoor footwear, particularly their iconic boots.",
      logo: "https://example.com/logos/timberland.png",
    },
  ];

  return (
    <div>
      <Title level={2}>Our Brands</Title>
      <CardPaginate dataCard={brands} customCard={MyCustomCard} />
    </div>
  );
}
