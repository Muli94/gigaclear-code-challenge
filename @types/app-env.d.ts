declare module "tailwind" {
  export * from "tailwind";

  interface Props {
    utilities: Utilities;
    colorScheme?: ColorSchemeName;
    children?: React.ReactNode | React.ReactNode[];
  }

  export const TailwindProvider: React.FC<Props>;
}
