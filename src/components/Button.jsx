import React from 'react'

const Button = ({ children }) => {
    return (
        <div>
            <button className="relative inline-flex h-10 md:h-12 active:scale-95 transistion overflow-hidden rounded-full p-[2px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]">
                </span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 md:px-7 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                    {children}
                </span>
            </button>
        </div>
    )
}

export default Button