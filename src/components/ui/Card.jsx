import { Children } from "react";
import { cn } from "../../lib/utils";

export default function Card({ Children, className, glass = false, ...props }) {
    return (
        <div
        className={cn("rounded-2xl border transition-all duration-300",
        glass? "bg-white/[0.5] border-white/[0.10] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.5)] hover:bg-white/[0.08] hover:border-white/[0.15]"
        : "bg-white/[0.06] border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]",
        className
        )}
        {...props}>
            {childern}
        </div>
    );
}

export function CardHeader({ childern, className, ...props }) {
    return (
        <div className={cn("px-6 pt-6 pb-2", className)} {...props}>
            {childern}
        </div>
    );
}

export function CardContent({ childern, className, ...props }) {
    return (
         <div className={cn("px-6 pb-2", className)} {...props}>
            {childern}
        </div>
    );
}
