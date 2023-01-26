import MakeHeader from "./components/headerComponent"
import MakeFooter from "./components/footerComponent";
import "./App.css"
import { useState } from "react";
import AboutMe from "./views/aboutMe"
import ContactMe from "./views/contactMe";

function App() {
  const[view,setView] = useState("aboutMe")
  


  if (view === "aboutMe"){
    return  <><MakeHeader view={view} setView={setView}/>
              <AboutMe />
              <MakeFooter />
            </>
  }
  else if (view === "contactMe"){
    return <><MakeHeader view={view} setView={setView}/>
              <ContactMe />
              <MakeFooter />
            </>
  }


}

export default App;
