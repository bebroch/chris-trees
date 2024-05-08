function Button({ className, children }: { className?: string; children?: React.ReactNode }) {
    const styles = 'mx-3 text-lg text-white font-bold hover:text-green-800'

    const classNameText = className ? `${styles} ${className}` : styles
    return <button className={classNameText}>{children}</button>
}

export default Button
