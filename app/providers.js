'use client';

import { NextUIProvider } from '@nextui-org/react';
import StyledComponentsRegistry from '@/lib/registry';

export function Providers({ children }) {
  return (
    <StyledComponentsRegistry>
      <NextUIProvider>{children}</NextUIProvider>
    </StyledComponentsRegistry>
  );
}
