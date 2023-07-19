import * as React from "react"

function ArrowForward(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={props.width || 20} height={props.height || 10} viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.84828 9.5L5.08265 8.74432L8.23464 5.59233H0.0712891V4.49858H8.23464L5.08265 1.35653L5.84828 0.590909L10.3028 5.04545L5.84828 9.5Z" fill={props.fill || "#9DA5B1"} />
        </svg>

    )
}

export default ArrowForward
