import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Card, Result } from "antd";
import { Empty } from "../undraw";

const ITEMS = gql`
  query {
    items {
      id
      name
      contents {
        name
        body
      }
    }
  }
`;

const ItemsList = () => {
  const { loading, error, data } = useQuery(ITEMS);

  if (loading) return <Card loading={true}></Card>;
  if (error) return <p>Error :(</p>;

  if (data.items.length === 0)
    return <Result icon={<Empty />} title="No results" />;

  return data.items.map(({ id, name, contents }) => (
    <Card key={id} title={name}>
      {contents.find(({ name }) => name === "description")?.body ||
        "no description"}
    </Card>
  ));
};

export default ItemsList;
