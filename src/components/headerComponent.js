import Info from "./infoBlock"


function MakeHeader() {
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