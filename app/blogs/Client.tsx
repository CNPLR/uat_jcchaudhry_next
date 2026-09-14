'use client'
import React, { lazy, memo, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import Banner from '../components/ui/Banner'
import MainHeading from '../components/ui/MainHeading'

import {useRouter , useSearchParams } from 'next/navigation'

import { CommonBlog } from '../components/ui/BlogVideos'
import Pagination from '../components/Pagination'


// Loading components for better UX
const BlogSkeleton = memo(() => (
    <div className="animate-pulse space-y-4 p-4">
        {[...Array(6)].map((_, index) => (
            <div key={index} className="flex space-x-4">
                <div className="rounded-lg bg-gray-300 h-32 w-48"></div>
                <div className="flex-1 space-y-2 py-1">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                </div>
            </div>
        ))}
    </div>
));

const ComponentLoader = memo(({ height = "60px", width = "100%" }: any) => (
    <div className="animate-pulse flex justify-center items-center" style={{ height, width }}>
        <div className="bg-gray-300 rounded w-full h-full"></div>
    </div>
));

// Error boundary component
const ErrorFallback = memo(({ error, resetError }: any) => (
    <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-4">{error?.message || 'Failed to load blogs'}</p>
        <button
            onClick={resetError}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
            Try Again
        </button>
    </div>
));

// Memoized blog item component
// const BlogItem = memo(({ blog }: any) => (
//     <Suspense fallback={<ComponentLoader height="150px" />}>
//         <CommonBlog
//             href={`/article/${blog.slug}`}
//             path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/blogs/banners/${blog.headerBanner}`}
//             para={blog.pageTitle}
//             predictions={blog.tag}
//             date={blog.createdAt} // Use createdAt instead of updatedAt
//             alt={blog.alttag}
//         />
//     </Suspense>
// ));

// Custom hook for blog data fetching
// const useBlogData = () => {
//     const [posts, setPosts] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const path = process.env.NEXT_PUBLIC_URI;

//     const fetchBlogs = useCallback(async () => {
//         try {
//             setLoading(true);
//             setError(null);

//             const response = await fetch(`${path}blog/`);

//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }

//             const data = await response.json();
//             setPosts(data);
//         } catch (err: any) {
//             setError(err);
//             console.error('Error fetching blogs:', err);
//         } finally {
//             setLoading(false);
//         }
//     }, [path]);

//     const retryFetch = useCallback(() => {
//         fetchBlogs();
//     }, [fetchBlogs]);

//     useEffect(() => {
//         fetchBlogs();
//     }, [fetchBlogs]);

//     return { posts, loading, error, retryFetch };
// };

// // Custom hook for intersection observer (for future lazy loading of images)
// const useIntersectionObserver = (options = {}) => {
//     const [isIntersecting, setIsIntersecting] = useState(false);
//     const [node, setNode] = useState(null);

//     const observer = useMemo(() => {
//         if (typeof window === 'undefined') return null;

//         return new IntersectionObserver(([entry]) => {
//             setIsIntersecting(entry.isIntersecting);
//         }, options);
//     }, [options]);

//     useEffect(() => {
//         if (!observer || !node) return;

//         observer.observe(node);
//         return () => observer.disconnect();
//     }, [observer, node]);

//     return [setNode, isIntersecting];
// };


const Client = () => {


    const [blog, setBlog] = useState<IBlogList>({} as IBlogList);
    const [loading, setLoading] = useState(true);

    const searchParams = useSearchParams();
    const router = useRouter();

    const limit = 8;

    const page: number = Math.max(1, Number(searchParams.get("page")) || 1);


    // const blogComponents = useMemo(() =>
    //     blog.data?.map((blog: any) => (
    //         <BlogItem key={blog.id} blog={blog} />
    //     )), [blog.data]
    // );

    useEffect(() => {
        const urlPage = Number(searchParams.get("page"));
        if (!urlPage || urlPage < 1) {
            router.replace("/blogs?page=1");
        }
    }, [searchParams, router]);

    useEffect(() => {
        let cancelled = false;
        const controller = new AbortController();

        async function fetchBlogs() {
            try {
                setLoading(true);
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_URI}blog/list?pg=${page}&limit=${limit}`,
                    { signal: controller.signal }
                );
                const data = await response.json();
                if (!cancelled) setBlog(data);
            } catch (error: any) {
                if (!cancelled && error.name !== "AbortError") {
                    console.error("Error fetching blogs:", error);
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        fetchBlogs();
        return () => {
            cancelled = true;
            controller.abort();
        };
    }, [page]);


    const handlePageChange = (newPage: number) => {
        router.push(`/blogs?page=${newPage}`);
    };
    return (
        <div>
            {/* <Suspense fallback={<ComponentLoader height="60px" />}>
                <HeadHelmet {...pageMetaData} />
            </Suspense> */}

            <Suspense fallback={<ComponentLoader height="300px" />}>
                <Banner
                    alttag="Numerology Name-Number Science Explained Motivation Positive Thinking Blog"
                    path="/allbanners/Numerology-Name-Number-Science-Explained-Motivation-Positive-Thinking-Blog.webp"
                />
            </Suspense>

            <Suspense fallback={<ComponentLoader height="80px" />}>
                <MainHeading style="text-center my-5" mainHeading="Blogs" />
            </Suspense>

            {loading ? (
                <BlogSkeleton />
            ) : blog?.data?.length > 0 ? (
                    <Suspense fallback={<BlogSkeleton />}>
                        <div className="my-10">
                            <ul className="flex justify-center flex-wrap">
                                {blog?.data?.map((item, index) => (
                                    <CommonBlog
                                        key={index}
                                        href={`/article/${item.slug}`}
                                        path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/blogs/banners/${item.headerBanner}`}
                                        para={item.pageTitle}
                                        predictions={item.tag}
                                        date={item.createdAt} // Use createdAt instead of updatedAt
                                        alt={item.alttag}
                                    />
                                ))}
                            </ul>
                        </div>
                        <Pagination
                             currentPage={page || blog.pagination.currentPage}
                        totalPages={blog.pagination.totalPages}
                        onPageChange={handlePageChange}
                        />
                    </Suspense>
            ) : (
                <div className="text-center py-10">
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No Blogs Available</h3>
                    <p className="text-gray-500">Please check back later for new content.</p>
                </div>
            )}
        </div>
    )
}

export default Client

interface IBlogList {
    data: any[];
    pagination: IPagination
}

export interface IPagination {
    currentPage: number;
    totalPages: number;
    totalRecords: number;
    hasNext: boolean;
    hasPrev: boolean;
}