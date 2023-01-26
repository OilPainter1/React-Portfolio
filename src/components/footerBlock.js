function InfoFooter(info){
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
export default InfoFooter