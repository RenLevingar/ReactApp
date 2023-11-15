import {useState} from "react";

const ErrorExample = () =>{
    let [title, setTitle] = useState(0)

    const handleClick = () =>{
        setTitle(title + 1);
        console.log(title);
    };
    return (
        <>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={handleClick}>
                Change Title
            </button>
        </>
    );
};

export default ErrorExample;