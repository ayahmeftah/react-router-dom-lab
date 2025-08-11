// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useState } from "react";
// import { useNavigate } from "react-router";

import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails"
import MailboxForm from "./components/MailboxForm/MailboxForm"
import LetterForm from "./components/LetterForm/LetterForm"

const App = () => {
  // const navigate = useNavigate();
  const [mailboxes, setMailboxes] = useState([])
  const [newMailbox, setNewMailBox] = useState({
    boxSize: '',
    boxOwner: ''
  })

  const [letters, setLetters] = useState([])
  const [newLetter, setNewLetter] = useState({
    mailboxId: '',
    recipient: '',
    message: ''
  })

  const handleInputChange = (event) => {
    setNewMailBox({ ...newMailbox, [event.target.name]: event.target.value })
  }

  const addBox = (event) => {
    event.preventDefault()
    const mailboxToAdd = {
      _id: mailboxes.length + 1,
      ...newMailbox
    }
    setMailboxes([...mailboxes, mailboxToAdd])
    setNewMailBox({
      boxSize: '',
      boxOwner: ''
    })
    // navigate('/mailboxes')
  }

  const addLetter = (event) => {
    event.preventDefault()
    setLetters([...letters, newLetter])
    setNewLetter({
      recipient: '',
      message: '',
      mailboxId: ''
    })
  }

  const handleLetterChange = (event) => {
    setNewLetter({ ...newLetter, [event.target.name]: event.target.value })
  }



  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes"
          element={
            <MailboxList
              mailboxes={mailboxes}
            />} />
        <Route path="/new-mailbox"
          element={
            <MailboxForm
              addBox={addBox}
              handleInputChange={handleInputChange}
              newMailbox={newMailbox}
            />} />
        <Route path="/mailboxes/:mailboxId"
          element={
            <MailboxDetails
              mailboxes={mailboxes}
              letters={letters}
            />} />
        <Route path="/new-letter"
          element={
            <LetterForm
              mailboxes={mailboxes}
              addLetter={addLetter}
              handleLetterChange={handleLetterChange}
              newLetter={newLetter}
            />} />
      </Routes>
    </Router>
  )
};

export default App;