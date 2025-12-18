import { memo } from "react";

 export const ErrorFallback = memo(({ error, resetError }: any) => (
    <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-4">{error?.message || 'Failed to load content'}</p>
        <button
            onClick={resetError}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
            Try Again
        </button>
    </div>
));