import Button from "@/src/components/atoms/button/Button";

export default {
  component: Button,
  title: "Inputs/Button",
  tags: ["autodocs"],
};

export const Default = (): React.ReactNode => {
  return (
    <div>
      <Button>Button</Button>
    </div>
  );
};
