import './Notify.css'

function Notify (
    { message }
) {
    return (
        <span className="notification">
            <p className="notification-text">{message}</p>
        </span>
    );
}

export default Notify;