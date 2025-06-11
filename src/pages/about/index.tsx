import Image from "next/image";
import Link from "next/link";

export default function AboutPage(){
    return (
        <div>
            <h2>about</h2>

            <Link href="/">Pagina home</Link>
            
            <Image
            src="/assets/batman.png"
            width={500}
            height={500}
            alt="Imagem"
            />
        </div>
    );
}