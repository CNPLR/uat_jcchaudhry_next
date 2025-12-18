import React from 'react'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers';
import LoShuGrid from './LoShuGrid';

export const metadata = GenerateMetadata({
    banner: "/allbanners/Lo-Shu-Grid-numerology.webp",
        title: "Lo Shu Grid Chart | Lo Shu Grid Planes | Chinese Numerology",
        description: "Chinese numerology explained with the help of Lo Shu Grid – Create your Lo Shu Grid table, check your missing numbers and know about your horizontal planes (Mind plane, Soul plane, Practical plane) and Vertical Planes (Thought plane, Plane of determination and will, Plane of action)",
        keywords: "lo shu grid, loshu grid, lo shu grid numerology, lo shu grid chart, lo shu grid planes, lou shu grid, lo shu chart, lo shu, what is lo shu grid, losu grid, chinese numerology lo shu grid, how to make lo shu grid, lo su grid, lo shu grid analysis, lo shu grid",
    headers: headers
});

const page = () => {
  return (
    <LoShuGrid />
  )
}

export default page