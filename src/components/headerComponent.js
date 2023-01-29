import Info from "./infoBlock"
import { useState } from "react"
import Portfolio from "../views/Portfolio"
import ContactMe from "../views/contactMe"
function MakeHeader() {

    const[view,setView] = useState("About Me")
    
        if (view === "About Me"){
        return (
        <header className='navBar'>
            <div>
                <h2>Henry Cryns</h2>
            </div>
            <Info 
                highlight="btn btn-info" 
                info="About Me" 
                view={view}
                setView={setView}
                >
            </Info>
            <Info 
                highlight="btn btn-secondary"
                info="Portfolio" 
                view={view}
                setView={setView}>
                </Info>
            <Info 
            highlight="btn btn-secondary" 
            info="Contact" 
            view={view}
            setView={setView}>
            </Info>
            <Info 
            highlight="btn btn-secondary" 
            info="Resume" 
            view={view}
            setView={setView}> 
            </Info>
        </header>)
        } else if (view === "Portfolio"){
            return (
                <>
                <header className='navBar'>
                    <div>
                        <h2>Henry Cryns</h2>
                    </div>
                    <Info 
                        highlight="btn btn-secondary" 
                        info="About Me" 
                        view={view}
                        setView={setView}>
                    </Info>
                    <Info 
                        highlight="btn btn-info"
                        info="Portfolio" 
                        view={view}
                        setView={setView}>
                        </Info>
                    <Info 
                        highlight="btn btn-secondary" 
                        info="Contact" 
                        view={view}
                        setView={setView}>
                    </Info>
                    <Info 
                        highlight="btn btn-secondary" 
                        info="Resume" 
                        view={view}
                        setView={setView}> 
                    </Info>
                </header>
                <Portfolio></Portfolio>
                </>
                )


        } else if (view === "Contact"){
            return (
                <>
                <header className='navBar'>
                    <div>
                        <h2>Henry Cryns</h2>
                    </div>
                    <Info 
                        highlight="btn btn-secondary" 
                        info="About Me" 
                        view={view}
                        setView={setView}>
                    </Info>
                    <Info 
                        highlight="btn btn-secondary"
                        info="Portfolio" 
                        view={view}
                        setView={setView}>
                        </Info>
                    <Info 
                    highlight="btn btn-info" 
                    info="Contact" 
                    view={view}
                    setView={setView}>
                    </Info>
                    <Info 
                    highlight="btn btn-secondary" 
                    info="Resume" 
                    view={view}
                    setView={setView}> 
                    </Info>
                </header>
                <ContactMe />
                </>)
        } else if (view === "Resume"){
            return (
                <header className='navBar'>
                    <div>
                        <h2>Henry Cryns</h2>
                    </div>
                    <Info 
                        highlight="btn btn-secondary" 
                        info="About Me" 
                        view={view}
                        setView={setView}>
                    </Info>
                    <Info 
                        highlight="btn btn-secondary"
                        info="Portfolio" 
                        view={view}
                        setView={setView}>
                        </Info>
                    <Info 
                    highlight="btn btn-secondary" 
                    info="Contact" 
                    view={view}
                    setView={setView}>
                    </Info>
                    <Info 
                    highlight="btn btn-info" 
                    info="Resume" 
                    view={view}
                    setView={setView}> 
                    </Info>
                </header>)
        }

    }
  
export default MakeHeader