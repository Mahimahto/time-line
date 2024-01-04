import './App.css'
const TimeLine = (props) =>{
    // console.log(props);
    let {year,event} = props
    return(
      <div>
        <h2 className='year'>year {year}:---</h2>
        <p className='event'>{event}</p>
      </div>
    )
    }
    
    export default TimeLine

