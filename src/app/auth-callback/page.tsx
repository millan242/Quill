import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/client";
import { useEffect } from "react";

//The only purpose this page has is to sync the loggedin user and make sure they are in the database.
const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');

    const { data, error, isLoading } = trpc.authCallback.useQuery();

    useEffect(() => {
        if (data?.success) {
            //user is synced to database
            router.push(origin ? `/${origin}` : '/dashboard');
        }

        if (error?.data?.code === 'UNAUTHORIZED') {
            router.push('/sign-in');
        }
    }, [data, error, origin, router]);
}

export default Page;