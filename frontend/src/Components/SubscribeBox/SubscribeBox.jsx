import "./SubscribeBox.css"

const SubscribeBox = () => {
    return (
        <div className="SubscribeBox">
            <h3>
                Let's Connect
            </h3>

            <div className="right">
                <input type="text" placeholder="Enter your email..." />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default SubscribeBox