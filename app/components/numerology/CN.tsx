import Img from "../ui/Img";
import Para from "../ui/Para";
import SubHeading from "../ui/SubHeading";

export function CN({ subHeading, path, para, alt }: any) {
    return (
        <>
            <div className='lg:w-[30%] shadow-md p-5 rounded-md bg-slate-100 mb-10 lg:mr-10'>
                <SubHeading style="text-center" subHeading={subHeading} />
                <Img alt={alt} style="mx-auto my-5 rounded-md" path={path} />
                <Para style="text-justify" para={para} />
            </div>
        </>
    )
}