import React from "react";
import { action } from "@storybook/addon-actions";

import Modal from "../lib/modal";

export default {
  title: "Modal",
  component: Modal,
};

export const Text = () => <Modal showTC={true} />;

export const Emoji = () => <Modal onClick={action("clicked")}></Modal>;
