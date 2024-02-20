import './cardscss.css'

export default function Cards(){
    return(
        <div className='card--maindiv'>
            <img className="card--photo" src="/swimmer.png" alt="" height="235px" width="176px"/>
            <div className='card--photoText'>SOLD OUT</div>
            <div className='card--infodiv'>
                <div className='card--ratingdiv'>
                    <img className='card--starIcon' src='/star-icon.png' height="30px" width='30px' />
                    <p className='card--rating'>5.0</p>
                    <p className='card--rating2'>(6) USA</p>
                </div>
                <h2 className='card--summary'>Learn Lessons with Katie Zaferes</h2>
                <div className='card--pay'>
                    <p className='card--summarypay1'>From $136 /</p>
                    <p className='card--summarypay2'> person</p>            
                </div>
            </div>
        </div>
    )
}