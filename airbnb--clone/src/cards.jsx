import './cardscss.css'

export default function Cards(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className='card--maindiv'>
            <img className="card--photo" src={props.img} alt="" height="235px" width="176px"/>
            {badgeText && <div className='card--photoText'>{badgeText}</div>}
            <div className='card--infodiv'>
                <div className='card--ratingdiv'>
                    <img className='card--starIcon' src='/star-icon.png' height="30px" width='30px' />
                    <p className='card--rating'>{props.rating}</p>
                    <p className='card--rating2'>{props.reviewCount} {props.country}</p>
                </div>
                <h2 className='card--summary'>{props.title}</h2>
                <div className='card--pay'>
                    <p className='card--summarypay1'>From ${props.price} /</p>
                    <p className='card--summarypay2'> person</p>            
                </div>
            </div>
        </div>
    )
}