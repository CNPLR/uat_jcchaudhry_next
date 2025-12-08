import React from 'react'
import Banner from './Banner'
import BookDtails from './BookDetails'
import AboutAuthor from '../AboutAuthor'
import Slider from '../Slider'

export interface BookProps {
  alttag: string;
  path: string;
  path1: string;
  subHeading1: string;
  subHeading2: string;
  subHeading3: string;
  subHeading4?: string;
  para1: string;
  para2: string;
  para3?: string;
  list: string[];
  list1?: string;
  list2?: string;
  text: string;
  link: string;
  alt: string;
  onClick?: () => void;
}


export const Books = ({alttag, path, para1, subHeading1, subHeading2, subHeading3, para2, path1, para3, list, list1, list2, subHeading4, onClick, text, link, alt}: BookProps) => {
  return (
        <div>
            <Banner alttag={alttag} path={path} />
            <div className=''>
                <BookDtails
                    path1={path1}
                    alt={alt}
                    subHeading1={subHeading1}
                    subHeading2={subHeading2}
                    subHeading3={subHeading3}
                    para1={para1}
                    para2={para2}
                    para3={para3}
                    list={list}
                    list1={list1 as string}
                    list2={list2 as string}
                    subHeading4={subHeading4}
                    onClick={onClick}
                    text={text}
                    link={link}
                />
                <AboutAuthor />
                <Slider heading="More Books by Dr. J C Chaudhry" />
                {/* <CustomerReview /> */}
            </div>
        </div>
    )
}
