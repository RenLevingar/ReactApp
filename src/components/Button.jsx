import {useState} from "react";

const Button = () =>{
    let [current, setCurrent] = useState("true")
    let [count, setCount] = useState(0);
    let [background, setBackground] = useState("divBG1")

    const clickFunc = () =>{
        if(current === "false"){
            setCurrent("true");
            setBackground("divBG1")
        } else {
            setCurrent("false");
            setBackground("divBG2")
        }

        setCount(count + 1)
    };
    return (
        <>
            <div className={background}>
                <h2>{current}</h2>
                <h2>{count}</h2>
                <button type="button" className="btn" onClick={clickFunc}>
                    Change Current
                </button>
            </div>
        </>
    );
};

export default Button;