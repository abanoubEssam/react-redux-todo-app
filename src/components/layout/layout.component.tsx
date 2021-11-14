import React, { FunctionComponent } from "react";
import { Container } from "react-bootstrap";
import layoutStyle from "./layout.module.css";
interface LayoutComponentProps {}

const LayoutComponent: FunctionComponent<LayoutComponentProps> = ({
  children,
}) => {
  return (
    <Container>
      <div className={layoutStyle.container}>{children}</div>
    </Container>
  );
};

export default LayoutComponent;
