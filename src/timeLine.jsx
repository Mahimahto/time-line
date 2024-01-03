const TimeLine = (props) =>{
    console.log(props);
    let {year,event} = props
    return(
      <div>
        <h2>year {year}:</h2>
        <p>{event}</p>
      </div>
    )
    }
    
    export default TimeLine

