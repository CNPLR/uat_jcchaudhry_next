
export default function NormalButton(props: any){
     return (
        <div onClick={props.onClick} className={`${props.style} transition buttonHover buttonBackground p-2 shadow-2xl font-semibold h-10 rounded-md flex justify-center items-center`}>
            <button type={props.type} className='text-white'>{props.text}</button>
        </div>
    )
}
