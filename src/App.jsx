import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import "./App.css"

function App() {
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <div className="content">
        <Content />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  )
}

export default App