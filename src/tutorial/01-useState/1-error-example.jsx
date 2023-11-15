// This is an exmaple of why we need to use useState and not variables

const ErrorExample = () =>{
    let title = "random title";

    const handleClick = () =>{
        title = "Welcome COding Fans"
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

// This is an error because we are not rendering the site
//this will also fail because we don't have a way of 
// perserving the variables between renders

// now that you have seen the error we can moce to example 2 and show the state