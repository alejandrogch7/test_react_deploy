import "./SASS/styles.css"
import Cover from "../src/JS/cover"
import "../src/SASS/cover.css"
import Navbar from "../src/JS/navbar"
import "../src/SASS/navbar.css"
import GreenAd from "../src/JS/greenAd"
import "../src/SASS/greenAd.css"
import Benefits from "./JS/benefits"
import "../src/SASS/benefits.css"
import More from "./JS/more"
import "../src/SASS/more.css"
import Footer from "./JS/footer"
import "../src/SASS/footer.css"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cover/>
      <GreenAd/>
      <Benefits/>
      <More/>
      <Footer/>
    </div>
  );
}

export default App;
