import InfoFooter from "./footerBlock";

function makeFooter(){
    return <footer>
        <InfoFooter 
            highlight="btn btn-dark" 
            info="GitHub" 
            link="https://github.com/OilPainter1">
        </InfoFooter>
        <InfoFooter 
            highlight="btn btn-dark" 
            info="LinkedIn" 
            link="https://www.linkedin.com/in/henry-cryns-600431243/">
        </InfoFooter>
        
    </footer>
}

export default makeFooter