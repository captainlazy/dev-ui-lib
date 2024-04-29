import React from "react";
import { Card } from "../components/Card/Card";
export default {
  component: Card,
};

export const DefaultCard = {
  render: () => (
    <Card
      heading={"Total Sessions"}
      textData={"Monthly Analysis"}
      impressions={"3,232"}
      color="green"
      label={"20%"}
    />
  ),
};

export const LossCard = {
  render: () => (
    <Card
      heading={"Retention"}
      textData={"Deliverable hits"}
      impressions={"$54,765"}
      color="red"
      label={"7%"}
    />
  ),
};
