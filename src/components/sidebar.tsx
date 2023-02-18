import Image from "next/image";
import RatiscrumLogo from "/public/rts-logo.png"

export default function Sidebar() {
    return (
        <nav className='flex flex-col bg-slate-800 border-r border-slate-700 shadow-lg p-5 w-72'>
            <Image src={RatiscrumLogo} alt="Ratiscrum Logo" />
        </nav>
    )
}