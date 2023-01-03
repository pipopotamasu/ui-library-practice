import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Black = Template.bind({});
Black.args = {
  color: "black",
};

export const Red = Template.bind({});
Red.args = {
  color: "red",
};

export const Blue = Template.bind({});
Blue.args = {
  color: "blue",
};
