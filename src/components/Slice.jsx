

function Slice(props) {
    return (
      <div className="slice">
        <img className="logo" src={props.sliceData.logo}></img>
        <div className="data-container">
            <div className="name">{props.sliceData.name}</div>
            <div className="domain">{props.sliceData.domain}</div>    
        </div>
      </div>
    );
  }
  
  export default Slice;