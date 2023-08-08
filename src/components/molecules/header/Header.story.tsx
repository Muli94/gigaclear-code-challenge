import Header from "@/src/components/molecules/header/Header";

export default {
  component: Header,
  title: "Surfaces/Header",
  tags: ["autodocs"],
};

export const Default = (): React.ReactNode => {
  return (
    <div className="w-full">
      <Header />
    </div>
  );
};
