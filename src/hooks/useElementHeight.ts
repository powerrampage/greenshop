import { useCallback, useState } from "react";

export function useElementHeight<T extends HTMLElement>(
  defaultHeight?: number
): [(node: T | null) => void, number] {
  const [height, setHeight] = useState<number>(defaultHeight ?? 0);

  const refCallback = useCallback((node: T | null) => {
    if (!node) return;

    const updateHeight = () => setHeight(node.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return [refCallback, height];
}
