"use client";

import Link from "next/link";
import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    if (!totalPages || totalPages <= 1) return null;

    const getPages = () => {
        const pages: (number | string)[] = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
            return pages;
        }
        pages.push(1);
        if (currentPage > 3) pages.push("...");
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 2);
        for (let i = start; i <= end; i++) pages.push(i);
        if (currentPage < totalPages - 2) pages.push("...");
        pages.push(totalPages);
        return pages;
    };

    // Use a plain <button> for pagination controls — you're already
    // driving navigation through onPageChange/router.push, so a next/link
    // here just fights with it and adds unwanted prefetching.
    return (
        <div className="text-center my-5 flex justify-center items-center flex-wrap gap-2">
            <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className={`font-semibold text-[#fd7e14] flex items-center ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                Previous
            </button>

            {getPages().map((page, index) =>
                page === "..." ? (
                    <span key={`dots-${index}`} className="pagination-dots">...</span>
                ) : (
                    <button
                        type="button"
                        key={page}
                        onClick={() => onPageChange(Number(page))}
                        className={`mx-2 text-black px-3 py-2 border border-slate-300 text-xs rounded-sm font-semibold ${
                            currentPage === page ? "text_over bg-[#fd7e14] text-white" : ""
                        }`}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className={`font-semibold text-[#fd7e14] flex items-center ${
                    currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;