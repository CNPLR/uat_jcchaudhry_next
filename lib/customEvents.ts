// utils/customEvent.ts
export const dispatchCustomEvent = (name: string, detail?: any) => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(name, { detail })
    );
  }
};
