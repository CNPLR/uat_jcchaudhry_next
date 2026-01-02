import React from 'react'
import SubHeading1 from '../components/ui/SubHeading1'
import SubHeading2 from '../components/ui/SubHeading2'

export default function BusinessAuditPrice({ bank }: any) {
  let data = bank !== undefined ? bank : ''
    return (
        <div className='py-10 px-5'>
            <div className='flex lg:flex-row flex-col justify-evenly items-center'>
                <div className=''>
                    {data.price ?
                        <>
                            <SubHeading1 style="text-[#fd7e14] my-5" subHeading={data.price} />
                            <SubHeading2 style="mb-2" subHeading="The Charges for this programme should be sent to:" />
                        </>
                        : ''
                    }
                    <table className='table'>

                        {data.name ?
                            <tr>
                                <th className='th'>NAME : </th>
                                <td className='td'>{data.name}</td>
                            </tr>
                            : ''
                        }

                        {data.bank_name ?
                            <tr>
                                <th className='th'>BANK NAME : </th>
                                <td className='td'>{data.bank_name}</td>
                            </tr>
                            : ''
                        }

                        {data.branch ?
                            <tr>
                                <th className='th'>Branch : </th>
                                <td className='td'>{data.branch}</td>
                            </tr>
                            : ''
                        }

                        {data.ac ? <tr>
                            <th className='th'>A/C : </th>
                            <td className='td'>{data.ac}</td>
                        </tr> : ''
                        }

                        {data.iBan ?
                            <tr>
                                <th className='th'>IBAN : </th>
                                <td className='td'>{data.iBan}</td>
                            </tr>
                            : ''
                        }

                        {data.ifsc_code ?
                            <tr>
                                <th className='th'>IFSC CODE : </th>
                                <td className='td'>{data.ifsc_code}</td>
                            </tr>
                            : ''
                        }

                        {data.accountType ?
                            <tr>
                                <th className='th'>Account Type : </th>
                                <td className='td'>{data.accountType}</td>
                            </tr>
                            : ''
                        }

                        {data.swiftcode ?
                            <tr>
                                <th className='th'>Swift code : </th>
                                <td className='td'>{data.swiftcode}</td>
                            </tr> : ''
                        }

                    </table>
                </div>
            </div>
            <div className='mt-10'>
                <p className='mb-10 text-center'>
                    (For further clarifications, please call at<a href="" className='hover:text-blue-600 underline-offset-4 hover:underline'>+91 9650797652</a> or email at <a href="" className='hover:text-blue-600 underline-offset-4 hover:underline'>support@jcchaudhry.com)</a>
                </p>
                <hr />
            </div>
        </div>
    )
}
