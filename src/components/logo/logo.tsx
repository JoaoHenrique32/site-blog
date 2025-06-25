import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return(
        <Link href="/" title="Página inicial">
        <Image
            src="/logosite.webp"
            alt="Logo Site"
            width={30}
             height={30}
        />
        </Link>
    )
}