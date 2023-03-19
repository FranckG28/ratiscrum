import Logo from "/public/rts-logo.png";
import LogoLight from "/public/rts-logo-light.png";
import Image from "next/image";

export default function RatiscrumLogo({ width }: { width?: number }) {
    return <>
        <Image className="hidden dark:block" src={Logo} alt="Ratiscrum Logo" width={width} />
        <Image className="dark:hidden" src={LogoLight} alt="Ratiscrum Logo" width={width} />
    </>
}