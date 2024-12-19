import { useState } from "react";
import logo from '../assets/react.svg';

function ListGroup() {
    const items = ['New York', 'Paris', 'Tokyo', 'London'];
    //hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const validateMessage = () => {
        return items.length === 0 && <p>No item Found.</p>
    }

    return (
        <>
            <img className="m-3" src={logo} alt="" />
            <h2>Lists of Item </h2>
            {validateMessage()}
            {/* {items.length === 0 ? <p>No item found.</p> : null} */}
            <ul className="list-group ">
                {items.map((item, index) => <li onClick={() => { setSelectedIndex(index) }} className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} > {item}</li >)}
            </ul >
        </>
    )
}

export default ListGroup