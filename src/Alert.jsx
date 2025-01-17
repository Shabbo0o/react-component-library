import './Alert.css';


export default function Alert({ color, icon, children}){
    return (
        <div className={`alert ${color}`}>
            <p className="alert-header">
                <i className={icon}></i> Alert
            </p>
            <p className='alert-body'>{children}</p>
        </div>
    )

}