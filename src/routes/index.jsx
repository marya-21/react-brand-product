import { createFileRoute } from "@tanstack/react-router";
import { Card, Typography } from "antd";
import { Link } from "@tanstack/react-router";
import CardPaginate from "../components/global/CardPaginate";
import useFetchQuery from "../api/useFetchQuery";

const { Title } = Typography;

export const Route = createFileRoute("/")({
  component: Index,
});

const MyCustomCard = (brand) => (
  <Card
    className="card"
    hoverable
    cover={
      <img
        alt={brand.name}
        src={brand.logo}
        style={{ height: 200, objectFit: "contain", padding: "20px" }}
      />
    }
  >
    <Card.Meta
      title={brand.name}
      description={brand.description}
      className="card-description"
    />

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
  const { data, isLoading, isError } = useFetchQuery(
    "brands",
    "https://684045e55b39a8039a578025.mockapi.io/brands"
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Fetch error!</div>;

  return (
    <div>
      <Title level={2}>Our Brands</Title>
      <CardPaginate dataCard={data} customCard={MyCustomCard} />
    </div>
  );
}
