import { memo } from "react";

export const ComponentLoader = memo(({ height = "60px", className = "" }: { height?: string; className?: string }) => (
    <div className={`animate-pulse flex justify-center items-center ${className}`} style={{ height }}>
        <div className="bg-gray-300 rounded w-full h-full"></div>
    </div>
));
