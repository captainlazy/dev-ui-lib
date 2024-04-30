import React from "react";
import { Notification } from "../components/Notification/Notification";

export default {
  component: Notification,
};

export const DefaultNotification = () => (
  <>
    <Notification type="success" message="$150,000 Deal closed" />
    <Notification type="error" message="$150,000 Deal closed" />
  </>
);

export const Error = () => (
  <>
    <Notification type="error" message="$150,000 Deal closed" />
  </>
);
