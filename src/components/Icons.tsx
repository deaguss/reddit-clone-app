import { LucideProps } from "lucide-react";
import Image from "next/image";

export const Icons = {
    logoMobile: (props: LucideProps) => (
        <Image src={'/Reddit-mobile-logo.png'} width={40} height={40} alt="" className="h-8 w-auto sm:w-6 md:hidden"/>
    ),
    logoDesktop: (props: LucideProps) => (
        <Image src={'/Reddit-desktop-logo.png'} width={80} height={80} alt="" className="hidden h-10 w-auto md:block"/>
    )
}