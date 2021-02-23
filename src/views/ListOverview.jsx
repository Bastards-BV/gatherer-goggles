import React from "react";
import { Col, Input, Row } from "antd";

import { BodyFooter } from "../templates";
import { ItemsList } from "../containers";

const ListOverview = () => {
  return (
    <BodyFooter>
      <Row>
        <Col span={20} offset={2}>
          <Input
            placeholder="Type to start searching ..."
            style={{ marginTop: "32px" }}
          />
          <div style={{ margin: "16px" }}>
            <ItemsList />
          </div>
        </Col>
      </Row>
    </BodyFooter>
  );
};

export default ListOverview;
