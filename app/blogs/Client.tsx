'use client'
import React, { lazy, memo, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import CommonPagination from '../components/ui/CommonPagination'
import Banner from '../components/ui/Banner'
import MainHeading from '../components/ui/MainHeading'

import { useParams, usePathname } from 'next/navigation'

import { CommonBlog } from '../components/ui/BlogVideos'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchBlogs } from '@/lib/slices/blogSlice'


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
const BlogItem = memo(({ blog }: any) => (
    <Suspense fallback={<ComponentLoader height="150px" />}>
        <CommonBlog
            href={`/article/${blog.slug}`}
            path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/blogs/thumbnails/${blog.thumbnail}`}
            para={blog.pageTitle}
            predictions={blog.tag}
            date={blog.updatedAt}
            alt={blog.alttag}
        />
    </Suspense>
));

// Custom hook for blog data fetching
const useBlogData = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const path = process.env.NEXT_PUBLIC_URI;

    const fetchBlogs = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`${path}blog/`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setPosts(data);
        } catch (err: any) {
            setError(err);
            console.error('Error fetching blogs:', err);
        } finally {
            setLoading(false);
        }
    }, [path]);

    const retryFetch = useCallback(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    return { posts, loading, error, retryFetch };
};

// Custom hook for intersection observer (for future lazy loading of images)
const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [node, setNode] = useState(null);

    const observer = useMemo(() => {
        if (typeof window === 'undefined') return null;

        return new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);
    }, [options]);

    useEffect(() => {
        if (!observer || !node) return;

        observer.observe(node);
        return () => observer.disconnect();
    }, [observer, node]);

    return [setNode, isIntersecting];
};


const Client = () => {
    const dispatch = useAppDispatch();
    const { blogs, loading, error } = useAppSelector((state) => state.blogs);

    // Memoized filtered and processed blog data
    const processedBlogs = useMemo(() => {
        if (!blogs?.data) return [];

        return blogs.data
            .filter((blog: any) => blog.blogIsActive !== false)
            .map((blog:any) => ({
                ...blog,
                // Pre-process any data transformations here
                id: blog._id || blog.slug,
            }))
            .sort((a: any, b: any) =>   new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()); // Sort by most recent
    }, [blogs]);

    // Memoized blog components
    const blogComponents = useMemo(() =>
        processedBlogs.map((blog: any) => (
            <BlogItem key={blog.id} blog={blog} />
        )), [processedBlogs]
    );

   useEffect(() => {
    if(blogs.data.length === 0)
       dispatch(fetchBlogs());
    
   },[])
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
            ) : blogComponents.length > 0 ? (
                <Suspense fallback={<BlogSkeleton />}>
                    <CommonPagination data={blogComponents} />
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