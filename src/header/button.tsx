function Button({ className = '', children }: { className?: string; children?: React.ReactNode }) {
    const styles = `mx-3 text-lg text-white font-bold 
    
    relative

    before:bg-teal-600 
    before:absolute
    before:-bottom-0
    before:-left-0
    before:h-[4px]
    before:w-full
    before:origin-bottom-center
    before:scale-x-0
    before:duration-200

    before:rounded-b-lg

    hover:before:origin-bottom-center
    hover:before:scale-x-100
    `

    const classNameText = `${styles} ${className}`
    return <button className={classNameText}>{children}</button>
}

export default Button

// hover:shadow-lg hover:shadow-cyan-500/50
