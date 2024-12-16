
export default Message
function Message() {

    const name = "";
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>This is react Message Component.</h1>
}