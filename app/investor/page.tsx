import Link from 'next/link'
import React from 'react'
import Banner from '../components/ui/Banner'
import LinkText from '../components/ui/LinkText'

const page = () => {
  return (
        <div>
            <Banner path="/allbanners/annual_returns.png" alttag={''} />
            <div className='my-5 space-y-3 ml-10 inline-block'>
                <div>
                    <Link href="/investor/AnnualReturn2023-24.pdf" target='_blank'>
                        <LinkText para="Annual Return - 2023 - 2024" />
                    </Link>
                </div>
                <div>
                    <Link href="/investor/Annual Return 2022.pdf" target='_blank'>
                        <LinkText para="Annual Return - 2022" />
                    </Link>
                </div>
                <div>
                    <Link href="/investor/Annual Return 2021.pdf" target='_blank'>
                        <LinkText para="Annual Return - 2021" />
                    </Link>
                </div>
                <div>
                    <Link href="/investor/Annual Return 2020.pdf" target='_blank'>
                        <LinkText para="Annual Return - 2020" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page