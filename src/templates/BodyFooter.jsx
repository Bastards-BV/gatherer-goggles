import React from "react";
import { Layout } from "antd";

const BodyFooter = ({ children }) => (
  <Layout style={{ background: "none" }}>
    <Layout.Content align="center" style={{ minHeight: "calc(100vh - 70px)" }}>
      {children}
    </Layout.Content>
    <Layout.Footer style={{ color: "rgba(0, 0, 0, 0.45)" }}>
      Gatherer, made with ♥ by Maarten Bicknese. Graphics by Katerina
      Limpitsouni | unDraw
    </Layout.Footer>
  </Layout>
);

export default BodyFooter;
