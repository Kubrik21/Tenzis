import "../CSS/Score.css"
function Score(props){
return(

    <div className="Score">
        <h2 className="Congrats">Congratulations!</h2>
        <h3 className="Score-Points">Your score is:<br/>{props.score}</h3>
        <button className="ResetButton" onClick={props.click}>Reset game</button>
    </div>
)
}

export{Score}