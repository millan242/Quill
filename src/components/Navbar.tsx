import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper className="h-14 flex items-center justify-between border-b border-zinc-200">
                <Link href={'/'} className="flex z-40 font-semibold">
                    <span>quill.</span>
                </Link>
                {/* todo: Add mobile navbar */}
                <div className="hidden items-center space-x-4 sm:flex">
                    <>
                        <Link
                            href='/pricing'
                            className={buttonVariants({
                                variant: "ghost",
                                size: 'sm'
                            })}>Pricing</Link>
                        <LoginLink
                            href='/pricing'
                            className={buttonVariants({
                                variant: "ghost",
                                size: 'sm'
                            })}
                        >Sign in</LoginLink>
                        <RegisterLink
                            href='/pricing'
                            className={buttonVariants({
                                size: 'sm'
                            })}
                        >Get started <ArrowRight className="ml-1.5 w-4 h-4" /></RegisterLink>
                    </>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar;