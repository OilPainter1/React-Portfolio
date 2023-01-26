function Info(info,{setView}){
    return <div >
        <button onClick={()=> console.log(info.setView)} type="button" className={info.highlight}>
        <h2>{info.info}
        </h2>
        </button>
        </div>
       
}
export default Info