

const Note = (props) => {
    const {note} = props;


    return(<div>
        <h1>{note.title}</h1>
        <h2>{note.content}</h2>
        {/* <p>{note.created_at}</p> */}
    </div>)
}

export default Note