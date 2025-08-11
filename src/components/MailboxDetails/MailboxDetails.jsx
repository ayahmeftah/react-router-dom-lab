import { useParams } from "react-router"

const MailboxDetails = ({ mailboxes, letters }) => {

    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    )
    const selectedLetters = letters.filter((letter) => (
        letter.mailboxId === mailboxId
    ))

    return (
        <>
            {
                selectedBox ?
                    <>
                        <h1>Mailbox {selectedBox._id}</h1>
                        <h3>Details</h3>
                        <p>Boxholder: {selectedBox.boxOwner}</p>
                        <p>Box Size: {selectedBox.boxSize}</p>

                        {/* letters part*/}
                        <h3>Letters</h3>
                        {
                            selectedLetters.map((letter, index) => (
                                <>
                                    <p key={index}>{letter.message}</p>
                                    <hr />
                                </>
                            ))
                        }
                    </>
                    :
                    <h1>Mailbox Not Found!</h1>
            }
        </>
    )
}

export default MailboxDetails