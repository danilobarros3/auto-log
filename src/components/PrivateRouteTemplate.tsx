import { AppSidebar } from "./left-menu";

export default function PrivateRouteTemplate({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <AppSidebar />
            <div className="w-full md:w-[92%] p-4 mt-24">
                {children}
            </div>
        </div>
    )
}