import { lazy, ReactNode, Suspense } from "react";

export default function lazyWithSuspenseWrapper(
  importFunc: () => Promise<any>,
  fallback: ReactNode = <>Loading...</>
) {

  const LazyComponent = lazy(importFunc);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  );
}