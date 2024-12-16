function ListGroup() {
    const items = ['New York', 'Paris', 'Tokyo', 'London'];
    // items = [];
    const validateMessage = () => {
        return items.length === 0 && <p>No item Found.</p>
    }
    const handleClick = () => {
        return items.map((item, index) => <li className="list-group-item" key={item} onClick={() => console.log(item, index)}>{item}</li>)
    }
    return (
        <>
            <h2>Lists of Item </h2>
            {validateMessage()}
            {/* {items.length === 0 ? <p>No item found.</p> : null} */}
            <ul className="list-group">
                {handleClick()}
            </ul>
        </>
    )
}

export default ListGroup