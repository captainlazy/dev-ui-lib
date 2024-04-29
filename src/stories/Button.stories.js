import { Button } from "../components/Button";
import { CTAButton } from "../components/CTAButton/CTAButton";

export default {
  component: Button,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: () => <Button primary label="Primary Button" />,
};

export const Secondary = {
  render: () => <Button primary={false} label="Secondary Button" />,
};

export const DemoCTA = {
  render: () => <CTAButton primary={false} demo={true} label="View Demo" />,
};

export const OutlineDemoCTA = {
  render: () => (
    <CTAButton primary={false} demo={false} label="Sign up for free" />
  ),
};
