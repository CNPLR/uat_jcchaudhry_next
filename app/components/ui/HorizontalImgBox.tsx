import Link from "next/link";
import Img from "./Img";
import Para from "./Para";

export default function HorizontalImgBox({ subHeading, path, para, path1, path2 }: any) {
    return (
        <div className='w-full mt-5 pb-5'>
            <div className='px-5 py-10 bg-slate-100 shadow-md border border-gray-200 rounded-md text-center w-[90%] m-auto'>
                <h2 className='md:text-[30px] text-[21px] font-\[400]'>{subHeading}</h2>
                <br />
                {para ? <Para style="my-1" para={para} /> : ''}
                {path ?
                    <Img path={path} style="mt-4 w-[80%] m-auto"  alt=""/>
                    :
                    (<div className='flex justify-center mt-5 space-x-5'>
                        <Link href="https://play.google.com/store/apps/details?id=jc.nummerro.app">
                            <Img style="w-[140px] h-[50px] md:w-auto" alt="play-store" path={path1} />
                        </Link>
                        <Link href="https://apps.apple.com/us/app/jc-nummerro-app/id1529437444">
                            <Img style="w-[140px] h-[50px] md:w-auto" path={path2} alt="app-store" />
                        </Link>
                    </div>)
                }
            </div>
        </div>
    )
}