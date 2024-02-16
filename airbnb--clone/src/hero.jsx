import './herocss.css'

export default function Hero(){
    return(
        <div className='hero--maindiv'>
            <img className="photo-grid" src="/photo-grid.png" alt="" height="500px" width="700px"/>
            <h1 className='hero--h1'>Online Experiences</h1>
            <h3 className='hero--h3'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
        </div>
    )
}