import React from 'react'
import GenerateMetadata from '../components/MetaGenerator'
import { headers } from 'next/headers';
import LoShuGrid from './LoShuGrid';

export const metadata = GenerateMetadata({
    banner: "/allbanners/Lo-Shu-Grid-numerology.webp",
        title: "Lo Shu Grid Chart & Meaning | Lo Shu Numerology by Dr. J C Chaudhry",
        description: "Create your Lo Shu Grid and understand its meaning. Learn about missing numbers, mind, soul, and action planes with accurate numerology guidance.",
        keywords: "lo shu grid, loshu grid, lo shu grid numerology, lo shu grid chart, lo shu grid planes, lou shu grid, lo shu chart, lo shu, what is lo shu grid, losu grid, chinese numerology lo shu grid, how to make lo shu grid, lo su grid, lo shu grid analysis, lo shu grid",
    pagePath: "/lo-shu-grid",
});

const page = () => {
  return (
    <LoShuGrid />
  )
}

export default page