function Info(info){
    return (
        <div >
            <button 
                type="button" 
                className={info.highlight}
                onClick={
                    ()=>info.setView(`${info.info}`)
                }>
                <h2>
                    {info.info}
                </h2>
            </button>
        </div>
    )
       
}
export default Info