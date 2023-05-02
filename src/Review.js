import {useState} from "react";

function Review({onClickBack, reviews}) {
    const [index, setIndex] = useState(-1);
    const onClickList = () => {
        setIndex(-1)
    }

    return <div>
        <button onClick={index === -1 ? onClickBack : onClickList}>Trở về</button>
        {
            index === -1 ? reviews.map(({title}, i) => <h2 style={{cursor: 'pointer'}} onClick={() => {
                setIndex(i)
            }}>
                {title}
            </h2>) : <div>
                <h2>{reviews[index].title}</h2>
                <div style={{whiteSpace: 'pre-wrap', margin: '1em'}}>{reviews[index].content}</div>
            </div>
        }
    </div>
}

export default Review;