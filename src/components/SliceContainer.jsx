import Slice from "./Slice";


function SliceContainer(props) {
    return (
      <div className="slice-container">
        {props.searchResult.length > 0
            ? props.searchResult.map(sliceData => <Slice sliceData={sliceData} key={sliceData.name}></Slice>)
            : <></>
        }
      </div>
    );
  }
  
  export default SliceContainer;