import { memo, Suspense } from "react";
import { ComponentLoader } from "./ComponentLoader";
import Link from "next/link";
import NormalButton from "../ui/NormalButton";

export const ConsultationCard = memo(({ title, description, buttonText, link, token, height = "md:h-96" }: any) => (
    <div className='p-2 dynemicCard'>
        <div className={`md:w-80 ${height} bg-linear-to-l from-slate-200 to-slate-100 border border-slate-300 justify-center p-4 rounded-lg shadow-md space-y-4`}>
            <h2 className='md:text-[30px] text-[21px]'>{title}</h2>
            <p>{description}</p>
            <Link href={link}>
                <Suspense fallback={<ComponentLoader height="40px" />}>
                    <NormalButton text={buttonText} style='w-52 mx-auto mt-5' />
                </Suspense>
            </Link>
        </div>
    </div>
));