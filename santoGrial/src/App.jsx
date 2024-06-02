import './App.css'
import Navbar from './components/Navbar.jsx'
import Filter from './components/Filter.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'


function App() {

  return (
    <>
      
      <header>
        <Navbar></Navbar>
      </header>

      <div className='mainBody'>
        <aside>
          <Filter></Filter>
        </aside>

        <main>
          <Main></Main>
        </main>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
