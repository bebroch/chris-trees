function Button({ className = '', children }: { className?: string; children?: React.ReactNode }) {
    const styles = `mx-3 text-lg text-white font-bold`

    const classNameText = `${styles} ${className}`
    return <button className={classNameText}>{children}</button>
}

export default Button

// hover:shadow-lg hover:shadow-cyan-500/50
