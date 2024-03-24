import './cardscss.css'

export default function Cards(props){
    console.log(props)
    let badgeText
    if (props.x.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.x.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className='card--maindiv'>
            <img className="card--photo" src={props.x.coverImg} alt="" height="235px" width="176px"/>
            {badgeText && <div className='card--photoText'>{badgeText}</div>}
            <div className='card--infodiv'>
                <div className='card--ratingdiv'>
                    <img className='card--starIcon' src='/star-icon.png' height="30px" width='30px' />
                    <p className='card--rating'>{props.x.stats.rating}</p>
                    <p className='card--rating2'>{props.x.stats.reviewCount} {props.x.country}</p>
                </div>
                <h2 className='card--summary'>{props.x.title}</h2>
                <div className='card--pay'>
                    <p className='card--summarypay1'>From ${props.x.price} /</p>
                    <p className='card--summarypay2'> person</p>            
                </div>
            </div>
        </div>
    )
}