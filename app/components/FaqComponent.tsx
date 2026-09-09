import React from 'react'
import SubHeading2 from './ui/SubHeading2';
import Para from './ui/Para';
import { renderToStaticMarkup } from 'react-dom/server';

interface Props {
    faqs: IFAQ[]
}


interface IFAQ {
    question: string;
    answer: string | React.ReactNode;
}


export default function FaqComponent({ faqs }: Props) {

    const faqItems = faqs?.map((f) => ({
        "@type": "Question",
        "name": toPlainText(f.question),
        "acceptedAnswer": {
            "@type": "Answer",
            "text": toPlainText(f.answer),
        }
    }));

    const jsonLdFaq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems
    }
    return (
        <div>

            {
                faqs?.map((faq, i) => (
                    <div key={i} className="mt-5">
                        <SubHeading2 style="" subHeading={`${i + 1}. ${faq.question}`} headTag='h2' />
                        <Para para={faq.answer} />
                    </div>
                ))
            }

            {jsonLdFaq && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLdFaq)
                    }}
                    key="faq-schema"
                />
            )}
        </div>

    )
}


function toPlainText(value: string | React.ReactNode): string {
    const htmlRegexG = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g
  if (typeof value === 'string') return value.replace(htmlRegexG, '');
  return renderToStaticMarkup(<>{value}</>).replace(htmlRegexG, '');
}