import React, { useState } from "react";
import { Card, Row, Col, Pagination } from "antd";
import { Link } from "@tanstack/react-router";

function CardPaginate({ pageSize = 8, dataCard = [], customCard }) {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const currentData = dataCard.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={[24, 24]}>
        {currentData.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
            {customCard(item)}
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <Pagination
        current={currentPage}
        total={dataCard.length}
        pageSize={pageSize}
        onChange={handlePageChange}
        style={{ textAlign: "center", marginTop: 20 }}
        align="end"
      />
    </div>
  );
}

export default CardPaginate;
