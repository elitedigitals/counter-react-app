
const Button = (props) => {

   

 
    return (  
        <div>
            <div className="button">
                <button style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "10px 10px",
                    
                }} onClick={props.handleclick}> 
                {props.title}
                
                </button>
            </div>
        
        
    </div>
    );
}
 
export default Button;