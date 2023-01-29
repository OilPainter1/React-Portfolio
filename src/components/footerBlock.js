function InfoFooter(info){
    if(info.link){
        return (
            <div >
                <a href={info.link}>
                    <button 
                        type="button" 
                        className={info.highlight}>
                        <h2>
                            {info.info}
                        </h2>
                    </button>
                </a>
            </div>
        )
    }
   
    else return null
       
}
export default InfoFooter