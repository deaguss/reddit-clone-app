import { LucideProps } from "lucide-react";
import Image from "next/image";

export const Icons = {
    logoMobile: (props: LucideProps) => (
        <Image src={'/Reddit-mobile-logo.png'} width={40} height={40} alt="" className="h-auto w-8 sm:w-6 md:hidden mx-auto"/>
    ),
    logoDesktop: (props: LucideProps) => (
        <Image src={'/Reddit-desktop-logo.png'} width={80} height={80} alt="" className="hidden h-auto w-16 md:block mx-auto"/>
    )
}