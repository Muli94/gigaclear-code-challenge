"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

interface ReactQueryClientProviderProps {
  children?: React.ReactNode;
}

const ReactQueryClientProvider: React.FC<ReactQueryClientProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryClientProvider;
