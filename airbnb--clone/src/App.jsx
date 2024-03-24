import './App.css'
import Cards from './cards.jsx'
import Hero from './hero.jsx'
import Navbar from './navbar.jsx'
import Data from './data.js'



function App() {
  return (
    <>
  <Navbar />
  <Hero />
  <section className='cards--list'>
      { Data.map(
        x => (

        <Cards
          key={x.id}
          img ={x.coverImg}
          rating= {x.stats.rating}
          reviewCount={x.stats.reviewCount}
          country="USA"
          title={x.title}
          price={x.price}
        />
        )
      )}
  </section>
    </>
  )
}

export default App
