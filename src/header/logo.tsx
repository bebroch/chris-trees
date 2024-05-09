function Logo() {
    return (
        <a href="#">
            <div className="flex items-center mr-6">
                <svg width="50px" viewBox="-80 -80 200 230">
                    <polygon points="0,0 80,120 -80,120" fill="#234236" />
                    <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C" />
                    <polygon points="0,-80 40,0 -40,0" fill="#38755B" />
                    <rect x="-20" y="120" width="40" height="30" fill="brown" />
                </svg>
                <div className="text-3xl text-white font-waffleSoft">Chris Trees</div>
            </div>
        </a>
    )
}

export default Logo
