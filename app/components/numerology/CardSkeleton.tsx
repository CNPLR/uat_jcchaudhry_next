import { memo } from "react";

export const CardSkeleton = memo(() => (
    <div className="animate-pulse p-2">
        <div className="md:w-80 md:h-80 bg-gray-200 rounded-lg shadow-md"></div>
    </div>
));