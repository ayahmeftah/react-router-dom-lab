import { useNavigate } from "react-router"

const MailboxForm = (props) => {
    const navigate = useNavigate()

    const handleBoxSubmit = (event) => {
        event.preventDefault()
        props.addBox(event)
        navigate('/mailboxes')
    }

    return(
        <>
            <h1>New Mailbox</h1>
            <form onSubmit={handleBoxSubmit}>
                <label>Enter a Boxholder:</label>
                <input type="text" name="boxOwner" placeholder="Boxholder name" onChange={props.handleInputChange} value={props.newMailbox.boxOwner}/>
                <label>Select a Box Size</label>
                <select name="boxSize" value={props.newMailbox.boxSize} onChange={props.handleInputChange}>
                    <option value="">Select Box Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default MailboxForm