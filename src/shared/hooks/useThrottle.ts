import { useRef, useCallback } from "react";

const useThrottle = <T extends (...args: unknown[]) => void>(
  valueFn: T,
  delay: number,
) => {
  const lastCall = useRef(0);
  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall.current >= delay) {
        lastCall.current = now;
        return valueFn(...args);
      }
    },
    [valueFn, delay],
  ) as unknown as T;
};

export default useThrottle;
