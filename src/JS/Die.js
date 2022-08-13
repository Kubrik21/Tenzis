import "../CSS/Die.css"

function Die(prop){

    return(
        <div className={prop.isBlocked===false ? "Die":"Active-die"} onClick={prop.click}><h2>{prop.value}</h2></div>
    )
}

export {Die}