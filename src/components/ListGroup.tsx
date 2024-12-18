import { useState } from "react";

function ListGroup() {
    const items = ['New York', 'Paris', 'Tokyo', 'London'];
    //hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const validateMessage = () => {
        return items.length === 0 && <p>No item Found.</p>
    }

    return (
        <>
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