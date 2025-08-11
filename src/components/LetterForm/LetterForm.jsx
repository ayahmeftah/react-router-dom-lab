import { useNavigate } from "react-router"

const LetterForm = (props) => {
    const navigate = useNavigate()

    const handleLetterSubmit = (event) => {
        event.preventDefault()
        props.addLetter(event)

        if (props.newLetter.mailboxId) {
            navigate(`/mailboxes/${props.newLetter.mailboxId}`)
        }
    }

    return (
        <>
            <h1>New Letter</h1>
            <form onSubmit={handleLetterSubmit}>
                <label>Select a Mailbox</label>
                <select name="mailboxId" onChange={props.handleLetterChange}>
                    <option value="">Select a Mailbox</option>
                    {
                        props.mailboxes.map((box) => {
                            return (
                                <option value={box._id} key={box._id}>
                                    Mailbox {box._id}
                                </option>
                            )
                        })
                    }
                </select>
                <label>Recipient</label>
                <input type="text" name="recipient" value={props.newLetter.recipient} placeholder="Recipient name" onChange={props.handleLetterChange} />
                <label>Message</label>
                <textarea name="message" value={props.newLetter.message} placeholder="Message" onChange={props.handleLetterChange}></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LetterForm