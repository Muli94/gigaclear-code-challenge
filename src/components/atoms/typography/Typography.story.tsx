import Typography from "@/src/components/atoms/typography/Typography";

export default {
  component: Typography,
  title: "Data Display/Typography",
  tags: ["autodocs"],
};

export const Default = (): React.ReactNode => {
  return (
    <div>
      <Typography variant="h1" color="primary">
        H1. Heading
      </Typography>
      <Typography variant="h2" color="primary">
        H2. Heading
      </Typography>
      <Typography variant="h3" color="primary">
        H3. Heading
      </Typography>
      <Typography variant="h4" color="primary">
        H4. Heading
      </Typography>
      <Typography variant="h5" color="primary">
        H5. Heading
      </Typography>
      <Typography variant="h6" color="primary">
        H6. Heading
      </Typography>
      <Typography variant="subheading1" color="primary">
        Subheading1
      </Typography>
      <Typography variant="subheading2" color="primary">
        Subheading2
      </Typography>
      <Typography variant="body1" color="primary">
        Body1
      </Typography>
      <Typography variant="body2" color="primary">
        Body2
      </Typography>
    </div>
  );
};
