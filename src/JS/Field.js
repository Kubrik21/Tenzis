import "../CSS/Field.css"
import { Die } from "./Die"
import { useEffect, useState } from "react"
import { Score } from "./Score"


function Field() {
    const [numb, setNumb] = useState([])
    const [win, setWin] = useState('false')
    const [score,setScore]=useState(0)

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function allAreEqual(array) {
        const result = array.every(element => {
            if (element === array[0]) {
                return true;
            }
        });

        return result;
    }

    useEffect(() => {

        const wynik = numb.map((element) => {
            return (element.value)
        })

        const czy_zaznaczono = numb.map((element) => {
            return (element.isBlocked)
        })
      
        if(wynik.length!==0 &&czy_zaznaczono.length!==0){
            if (!czy_zaznaczono.includes(false)) {
                if (allAreEqual(wynik)) { setWin(true) }
            }
        }
        

    }, [numb])

    useEffect(() => {
        setNumb(() => {
            const newArray = []
            for (var i = 0; i < 6; i++) {
                var obj = {}
                obj.value = getRndInteger(1, 6);
                obj.isBlocked = false;
                obj.key = i
                newArray.push(obj)
            }
            return (newArray)
        }
        )
    }, [])

    function Change_die() {
        setScore(score+1)
        setNumb(prev => {
            const elem = prev.map((el) => {
                if (el.isBlocked === false)
                    return {
                        ...el,
                        value: getRndInteger(1, 6)
                    }
                else return { ...el }
            }
            )
            return (elem)
        })
    }

    function ChangeStatus(ids) {
        setNumb(prev => {
            const elem = prev.map((el) => {
                if (el.key === ids) { return { ...el, isBlocked: !el.isBlocked } } else { return { ...el, } }
            }
            )
            return (elem)
        })
    }

    function Reset(){
        setScore(0)
        setNumb(prev=>{
            const elem=prev.map((el)=>{
                return{...el,
                        isBlocked:false,
                        value: getRndInteger(1, 6)}
            })
            return elem;
        })
        setWin(false)
        
    }

    const Dieelem = numb.map((elem) => {
        return (<Die value={elem.value} isBlocked={elem.isBlocked} key={elem.key} click={() => ChangeStatus(elem.key)}></Die>)
    })
    
    return (
        <div className="Field">
            <h1 className="Name">Tenzis</h1>
            <p className="Content">Roll until all dice are the same. Click each die to freeze it at its current vale between rolls.</p>
            <div className="Field-elems">
                {Dieelem}
                <button className="Button-elem" onClick={Change_die}>Roll up again!</button>
                {win === true && <Score score={score} click={()=>Reset()} />}
            </div>
        </div>
    )
}
/*Grid-template*/
export { Field }