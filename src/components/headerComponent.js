import Info from "./infoBlock"
function MakeHeader({view,setView}) {
    console.log(view)
    if (view === "aboutMe"){
        
        return (<header className='navBar'>
        <div>
            <h2>Henry Cryns</h2>
        </div>
        <Info highlight="btn btn-info" info="About Me"></Info>
        <Info highlight="btn btn-secondary"info="Portfolio" ></Info>
        <Info highlight="btn btn-secondary" info="Contact" ></Info>
        <Info highlight="btn btn-secondary" info="Resume" ></Info>
    </header>)
    } else
    return <header className='navBar'>
            <div>
                <h2>Henry Cryns</h2>
            </div>
            <Info info="About Me" ></Info>
            <Info info="Portfolio"></Info>
            <Info info="Contact"></Info>
            <Info info="Resume"></Info>
        </header>
        
}

export default MakeHeader