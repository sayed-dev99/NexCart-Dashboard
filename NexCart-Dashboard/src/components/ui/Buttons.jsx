export default function Button({
    children,
    className = "",
    variant = "primary",
    ...props
    }) {
    const base =
        "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50 select-none";

    const variants = {
        primary:
            "bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:bg-cyan-400 hover:shadow-[0_0_28px_rgba(6,182,212,0.35)] dark:shadow-none",

        ghost:
            "border border-slate-300 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-transparent dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white dark:hover:bg-slate-800",

        danger:
            "bg-rose-50 text-rose-500 border border-rose-200 hover:bg-rose-100 hover:border-rose-300 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20 dark:hover:bg-rose-500/20 dark:hover:border-rose-500/40",

        violet:
            "bg-violet-50 text-violet-600 border border-violet-200 hover:bg-violet-100 hover:border-violet-300 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/20 dark:hover:bg-violet-500/20 dark:hover:border-violet-500/40",

        solid:
            "bg-slate-900 text-white hover:bg-slate-700 border border-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700",
    };

    return (
        <button
            className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}