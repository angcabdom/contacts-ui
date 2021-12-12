

function Contact(props) {
    return (
        <tr>
            <td>{props.contact.name}</td>
            <td>{props.contact.phone}</td>
            <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-primary">Delete</button>
            </td>

        </tr>
    )
}

export default Contact;