import MakeHeader from "./components/headerComponent"
import MakeFooter from "./components/footerComponent";
import "./App.css"
import PortfolioBlock from "./components/PortfolioBlock"

function App() {
  return  <><MakeHeader />
            <section>
            <PortfolioBlock 
            img="../public/logo192.png"
            alt="test"
            name="test"
            link="https://google.com">
            </PortfolioBlock>
            </section>

            <MakeFooter />
          </>

}

export default App;
