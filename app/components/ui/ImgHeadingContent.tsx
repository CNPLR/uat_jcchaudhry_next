'use client';

import Img from './Img';
import SubHeading from './SubHeading';
import NormalButton from './NormalButton';
import SmallButton from './SmallButton';
import Para from './Para';
import SubHeading2 from './SubHeading2';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type ImgHeadingContentProps = {
  path: string;
  para: string;
  styleimg?: string;
  nbutton?: string;
  sbutton?: string;
  subHeading?: string;
  para1?: string;
  nstyle?: string;
  style?: string;
  subHeading2?: string;
  subhs?: string;
  link?: string;
  nomore?: string;
  alt?: string;
  target?: string;
};

export default function ImgHeadingContent({
  path,
  para,
  styleimg,
  nbutton,
  sbutton,
  subHeading,
  para1,
  nstyle = '',
  style = '',
  subHeading2,
  subhs = '',
  link = '',
  nomore,
  alt = '',
  target,
}: ImgHeadingContentProps) {

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  return (
    <div className={`${style} flex flex-col lg:flex-row justify-start items-start my-10`}>
      <Img style={`${styleimg ? styleimg : 'w-96'}`} path={path as string} alt={alt as string} />

      <div className='lg:ml-10 space-y-5'>

        {subHeading && (
          <SubHeading style={subhs} subHeading={subHeading} />
        )}

        {subHeading2 && (
          <SubHeading2 subHeading={subHeading2} />
        )}

        <Para para={para} style="text-justify mt-5 lg:mt-0" />

        {para1 && (
          <Para para={para1} style="text-justify" />
        )}

        {nomore && link && (
          <Link href={link} target={target}>
            <NormalButton text={nomore} style={`${nstyle} mx-auto lg:mx-0`} />
          </Link>
        )}

        {nbutton && (
          <Link href={token ? '/dashboard' : '/numerology/signup'}>
            <NormalButton text={nbutton} style={`${nstyle} mx-auto lg:mx-0`} />
          </Link>
        )}

        {sbutton && (
          <Link href="/top-numerologist-india">
            <SmallButton text={sbutton} style="mx-auto lg:mx-0" />
          </Link>
        )}

      </div>
    </div>
  );
}
