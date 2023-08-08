"use client";

import { HydrateProps, Hydrate as RQHydrate } from "@tanstack/react-query";

function Hydrate(props: HydrateProps): JSX.Element {
  return <RQHydrate {...props} />;
}

export default Hydrate;
