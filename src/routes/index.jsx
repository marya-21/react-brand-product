import { createFileRoute } from "@tanstack/react-router";
import { Row, Col, Card, Typography } from "antd";
import { Link } from "@tanstack/react-router";
import CardPaginate from "../components/global/CardPaginate";
import { useQuery } from "@tanstack/react-query";
import { brandsQueryOptions } from "../api/brands";

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
  const { data: brands, isLoading, error } = useQuery(brandsQueryOptions);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Title level={2}>Our Brands</Title>
      <CardPaginate dataCard={brands} customCard={MyCustomCard} />
    </div>
  );
}
