import React from 'react'
import GenerateMetadata from '../components/MetaGenerator'
import BusinessAuditPrice from './BusinessAuditPrice'
import BusinessAudit from './BusinessAudit'

export const metadata = GenerateMetadata({
        pagePath: "/business-numerology-audit",
        banner: "/allbanners/Get-a-Business-Numerology-Audit-for-growth-insights.webp",
        title: "Numerology Audit for Businesses | Company and Employees Numerology Audit",
        description: "Get the Numerology reading of your company and the top management employees.The Business Numerology Audit by Numerologist, Dr. J C Chaudhry helps you know your company’s growth and the employees who are compatible with your brand.",
        keywords: "business numerology audit, numerology audit for business, numerology audit of corporates, numerology audit of company, company name numerology audit, company employees’ numerology audit"
    
})
export default function page() {
  return (
    <BusinessAudit />
  )
}
