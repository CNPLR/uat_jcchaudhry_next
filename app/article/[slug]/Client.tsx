'use client'
import {  Suspense, useCallback, useMemo, useState } from 'react'
import {  usePathname } from 'next/navigation'

import ImgLink from '../../components/ui/ImgLink';
import SmallButton from '../../components/ui/SmallButton';
import NormalButton from '../../components/ui/NormalButton';
import SubHeading from '../../components/ui/SubHeading';
import SubHeading2 from '../../components/ui/SubHeading2';
import Para from '../../components/ui/Para';
import LinkText from '../../components/ui/LinkText';
import Banner from '../../components/ui/Banner';
import MainHeading from '../../components/ui/MainHeading';
import Subscribe from '@/app/components/Subscribe'
import dynamic from 'next/dynamic';
import { Blog } from '@/app/models/blog';
import "../../styles/blog.css"

const InlineShareButtons = dynamic(
  () => import('sharethis-reactjs').then(mod => mod.InlineShareButtons),
  { ssr: false }
);



export default function ClientBlog({ slug, initialBlog, bannerUrl, blogData } : { slug: string, initialBlog: Blog,bannerUrl: string, blogData: any}) {
    
    const [formData, setFormData] = useState({
        url: "",
        email: "",
        comment: ""
    });

    const path : any= process.env.NEXT_PUBLIC_URI;
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    const fullUrl = usePathname();

    // Use custom hooks
    const { pageData, posts, loading, error }: any = blogData;
    const { submitComment, isSubmitting, submitError } = useCommentSubmission(path, slug);

    // Memoized values
    const blogPost = pageData?.[0];
    const faqData = blogPost?.faqInput || [];

    const publishDate : any= useMemo(() =>
        blogPost ? new Date(blogPost.blogPublishDate).toDateString() : '',
        [blogPost]
    );

    const updateDate : any = useMemo(() =>
        blogPost ? new Date(blogPost.blogUpdateDate).toDateString() : '',
        [blogPost]
    );

    const readTime : any = useMemo(() =>
        blogPost?.readTime ? `${blogPost.readTime} Minutes` : "12 Minutes",
        [blogPost]
    );

    // Memoized schemas
    // const blogSchema = useMemo(() => {
    //     if (!blogPost) return null;

    //     return {
    //         "@context": "https://schema.org",
    //         "@type": "Article",
    //         "mainEntityOfPage": {
    //             "@type": "WebPage",
    //             "@id": fullUrl
    //         },
    //         "headline": blogPost.metaTitle,
    //         "description": blogPost.metaDescription,
    //         "image": `https://newcnpl.s3.ap-south-1.amazonaws.com/public/blogs/banners/${blogPost.headerBanner}`,
    //         "author": {
    //             "@type": "Person",
    //             "name": "J C Chaudhry",
    //             "url": domain
    //         },
    //         "publisher": {
    //             "@type": "Organization",
    //             "name": "Chaudhry Nummero Pvt. Ltd.",
    //             "logo": {
    //                 "@type": "ImageObject",
    //                 "url": domain + "/logos/jclogo.png"
    //             }
    //         },
    //         "datePublished": new Date(blogPost.createdAt).toDateString(),
    //         "dateModified": new Date(blogPost.updatedAt).toDateString()
    //     };
    // }, [blogPost, fullUrl, domain]);

    // const faqSchema = () => {
    //     if (faqData.length <= 1) return null;

    //     const faqItems = faqData.map((f: any) => ({
    //         "@type": "Question",
    //         "name": f.question,
    //         "acceptedAnswer": {
    //             "@type": "Answer",
    //             "text": f.answer
    //         }
    //     }));

    //     return {
    //         "@context": "https://schema.org",
    //         "@type": "FAQPage",
    //         "mainEntity": faqItems
    //     };
    // };

    // Form handlers
    const handleInputChange = useCallback((field: any, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    }, []);

    const handleSubmit = useCallback(async (event: any) => {
        event.preventDefault();
        const success = await submitComment(formData);
        if (success) {
            setFormData({ url: "", email: "", comment: "" });
        }
    }, [formData, submitComment]);

    // Loading state
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Blog</h2>
                    <p className="text-gray-600">{error}</p>
                </div>
            </div>
        );
    }

    if (!blogPost) {
        return null;
    }

  return   (
     <div className=''>
           

            {/* <Suspense fallback={<ComponentLoader height="300px" />}> */}
                <Banner
                    alttag={blogPost.alttag}
                    path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/blogs/banners/${blogPost.headerBanner}`}
                />
            {/* </Suspense> */}

            {/* <Suspense fallback={<ComponentLoader height="80px" />}> */}
                <MainHeading
                    style="text-center my-5 mx-auto w-[90%]"
                    mainHeading={blogPost.pageTitle}
                />
            {/* </Suspense> */}
                
            <div className='mx-auto xl:w-3/4'>
                <BlogMetaInfo
                    publishDate={publishDate}
                    updateDate={updateDate}
                    readTime={readTime}
                />

                <div className='blog-content my-10 px-10'>
                    <div dangerouslySetInnerHTML={{  __html: blogPost.pageContent }}></div>

                    {faqData.length > 0 && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                            {faqData.map((faq: any, index: number) => (
                                <FAQItem key={index} faq={faq} />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* <Suspense fallback={<ComponentLoader height="100px" />}> */}
                <Subscribe />
            {/* </Suspense> */}

            <AppStoreLinks />

            {/* <Suspense fallback={<ComponentLoader height="60px" />}> */}
                <SubHeading2 style="text-center my-10" subHeading="Share" />
                <InlineShareButtons
                    config={{
                        alignment: 'center',
                        color: 'social',
                        enabled: true,
                        font_size: 16,
                        labels: 'cta',
                        language: 'en',
                        networks: ['whatsapp', 'linkedin', 'messenger', 'facebook', 'twitter', 'pinterest', 'email'],
                        padding: 12,
                        radius: 4,
                        show_total: true,
                        size: 40,
                    }}
                />
            {/* </Suspense> */}

            <div className='my-10'>
                {/* <Suspense fallback={<ComponentLoader height="40px" />}> */}
                    <SubHeading style="text-center my-10" subHeading="Leave Comment Here !" />
                {/* </Suspense> */}

                <form onSubmit={handleSubmit} className='mx-auto lg:w-2/4 w-3/4'>
                    <div className="mb-5">
                        <input
                            type="email"
                            value={formData.email}
                            onChange={e => handleInputChange('email', e.target.value)}
                            name="email"
                            placeholder="Email Address"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="mb-5">
                        <input
                            type="url"
                            value={formData.url}
                            onChange={e => handleInputChange('url', e.target.value)}
                            name="url"
                            placeholder="Website URL"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="mb-5">
                        <textarea
                            rows={4}
                            name="message"
                            value={formData.comment}
                            onChange={e => handleInputChange('comment', e.target.value)}
                            placeholder="Type your Comment"
                            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    {submitError && (
                        <div className="mb-5 text-red-600 text-center">
                            Error: {submitError}
                        </div>
                    )}

                    <div>
                        <Suspense fallback={<ComponentLoader height="40px" />}>
                            <NormalButton
                                type="submit"
                                style="mx-auto"
                                text={isSubmitting ? "Submitting..." : "Add Comment"}
                                disabled={isSubmitting}
                            />
                        </Suspense>
                    </div>
                </form>
            </div>

            <div className='mx-auto lg:w-2/4 w-3/4 my-10'>
                {/* <Suspense fallback={<ComponentLoader height="40px" />}> */}
                    <SubHeading2 subHeading="Comments" />
                {/* </Suspense> */}

                <div className='my-10'>
                    <hr />
                </div>

                {posts?.data?.length > 0 ? (
                    posts.data.map((comment: any) => (
                        <Comment key={comment._id} comment={comment} />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No comments yet. Be the first to comment!</p>
                )}
            </div>
        </div>
  )
}


// -------------------
// Types
// -------------------
type FAQ = {
  question: string
  answer: string
}

type Comment = {
  _id: string
  email: string
  url: string
  comment: string
}

// -------------------
// Comment Card
// -------------------
// function CommentBox({ comment }: { comment: Comment }) {
//   return (
//     <div className="flex justify-between items-center border-b py-4">
//       <div>
//         <Para para={comment.email} />
//         <SubHeading2 subHeading={comment.comment} />
//         <LinkText para={comment.url} />
//       </div>
//       <SmallButton text="Reply" />
//     </div>
//   )
// }

// -------------------
// FAQ Item
// -------------------
function FAQItem({ faq }: { faq: FAQ }) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold text-lg">{faq.question}</h3>
      <p className="text-gray-700 mt-1">{faq.answer}</p>
    </div>
  )
}


// Loading component for lazy-loaded sections
const ComponentLoader = ({ height = "20px" }: { height?: string }) => (
    <div className={`animate-pulse bg-gray-200 rounded`} style={{ height }}>
        <div className="flex space-x-4 p-4">
            <div className="rounded-full bg-gray-300 h-10 w-10"></div>
            <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
        </div>
    </div>
);

// Memoized comment component
const Comment = ({ comment }: any) => (
    <div className='flex justify-between items-center my-5'>
        <div>
            <Para para={comment.email} />
            <SubHeading2 subHeading={comment.comment} />
            <LinkText para={comment.url} />
        </div>
        <SmallButton text="Reply" />
    </div>
);


// Memoized meta info component
const BlogMetaInfo = ({ publishDate, updateDate, readTime }: any) => (
    <div className='px-10'>
        <hr />
        <div className='flex justify-evenly items-center my-2'>
            <div>
                <Para para="Published" />
                <Para para={publishDate} />
            </div>
            <div>
                <Para para="Last Updated" />
                <Para para={updateDate} />
            </div>
            <div>
                <Para para="Read Time" />
                <Para para={readTime} />
            </div>
        </div>
        <hr />
    </div>
);

// Memoized app store links component
const AppStoreLinks = () => (
    <>
        <SubHeading2 style="text-center mt-10 mb-5" subHeading="Go to Mobile Application" />
        <div className='flex justify-center items-center space-x-5'>
            <Suspense fallback={<ComponentLoader height="40px" />}>
                <ImgLink
                    path="/images_folder/google-play.png"
                    alt="google-play"
                    to="https://play.google.com/store/apps/details?id=jc.nummerro.app"
                    style={"w-[140px] h-[50px]"}
                />

                <ImgLink
                    path="/images_folder/app-store.png"
                    alt="app-store"
                    to="https://apps.apple.com/us/app/jc-nummerro-app/id1529437444"
                    style={"w-[140px] h-[50px]"}
                />
            </Suspense>
        </div>
    </>
);

// Custom hook for API calls

// Custom hook for comment submission
const useCommentSubmission = (path:string, slug:string) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const submitComment = useCallback(async (commentData: any) => {
        try {
            setIsSubmitting(true);
            setSubmitError(null);

            const response = await fetch(`${path}comment`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...commentData, slug })
            });

            if (!response.ok) {
                throw new Error('Failed to submit comment');
            }

            const result = await response.json();
            return result.success;
        } catch (err:any) {
            setSubmitError(err.message);
            return false;
        } finally {
            setIsSubmitting(false);
        }
    }, [path, slug]);

    return { submitComment, isSubmitting, submitError };
};
