import { memo } from "react";

export const VideoSkeleton = memo(() => (
    <div className="animate-pulse m-2">
        <div className="w-80 h-48 bg-gray-200 rounded-lg"></div>
        <div className="mt-2 h-4 bg-gray-200 rounded w-3/4"></div>
    </div>
));