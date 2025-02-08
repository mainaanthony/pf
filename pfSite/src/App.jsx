
import './App.css'
import Content from './layout/content/content'
import Footer from './layout/footer/footer'
import Header from './layout/header/header'

function App() {
  

  return (
    <div className="App flex flex-col  h-full w-full min-h-screen border-4 px-4 relative">
       <Header />
       <Content />
       <Footer />
    </div>
    )
}

export default App
