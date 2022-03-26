import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.png"

export default function Menu() {
    return(
        <>
            <div className="menu_logo">
                <Image 
                    src={logo}
                    width="48px"
                    height="48px">
                    
                </Image>

                <div className="logo_text">Halloween</div>
            </div>
            <div className="menu_list">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/category">
                    <a>Category</a>
                </Link>
                <Link href="/candy">
                    <a>Candy</a>
                </Link>
                <Link href="/new">
                    <a>New</a>
                </Link>
                <Link href="/support">
                    <a>Support</a>
                </Link>
            </div>
        </>
    )
}