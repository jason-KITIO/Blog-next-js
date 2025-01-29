import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex justify-center items-center content-center h-[100vh]">
            <p>Chargement...</p>
            <Skeleton className="w-[100px] h-[20px] rounded-full" />
        </div>
    )
}