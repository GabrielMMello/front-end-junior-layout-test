import "./NavElement.css"

function NavElement(props) {
    return (
        <div id={props.header} className={props.sizeClass}>
            <h2>{props.header}</h2>
            <p>{props.text}</p>
        </div>
    );
  }
  
  export default NavElement;