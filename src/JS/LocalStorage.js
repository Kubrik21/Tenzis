function CheckStorage() {
    const elem = {}
    elem.value = 2
    localStorage.setItem("score", JSON.stringify(elem))
    //     if(localStorage.getItem("score")){
    //         setLocalStorage
    //         const elem=JSON.parse(localStorage.getItem("score"))
    //         console.log(elem)
    //     }else{/*Nie istnieje*/
    //         const elem={}
    //         elem.value=2
    //         localStorage.setItem("score",JSON.stringify(elem))
    // }
}

function LocalStorage(props) {
    CheckStorage()
    return (
        <div>StorageList...</div>
    )
}

export { LocalStorage }