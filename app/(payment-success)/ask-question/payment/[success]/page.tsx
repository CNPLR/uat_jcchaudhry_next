import PaymentSuccess from '@/app/(payment-success)/PaymentSuccess';
import PaymentFailed from '@/app/(payment-success)/PaymentFailed';
export default async function Page({searchParams}: any){
    const success = await searchParams;
    console.log(success)
  return (
   <PaymentSuccess searchParams={success}/>
  )
}
