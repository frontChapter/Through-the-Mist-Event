declare module 'lenis/react' {
  import React from 'react';
  import Lenis from 'lenis';

  export interface LenisProps {
    root?: boolean;
    options?: any;
    className?: string;
    autoRaf?: boolean;
    children?: React.ReactNode;
    props?: any;
    ref?: any;
  }

  export const ReactLenis: React.ForwardRefExoticComponent<
    LenisProps & React.RefAttributes<Lenis>
  >;

  export function useLenis(
    callback?: (lenis: Lenis) => void,
    deps?: any[],
    priority?: number
  ): Lenis | undefined;

  export default ReactLenis;
}
