import './Card.css'

export default function Card({ href, imgAlt, imgSrc, children }) {
    return (
    <div className="card">
        <img src={imgSrc} alt={imgAlt} href={href} className="card-img" />
        <div className="card-content">
        {children}
        </div>
        <a href={href} className="card-link">Learn React</a>
    </div>
    );
}