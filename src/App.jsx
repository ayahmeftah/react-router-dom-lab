// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails"
import MailboxForm from "./components/MailboxForm/MailboxForm"

const App = () => {

  const [mailboxes, setMailboxes] = useState([])
  const [newMailbox, setNewMailBox] = useState({
    boxSize: '',
    boxOwner: ''
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
    console.log(mailboxes)
  }


  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<main><h1>Post Office</h1></main>}/>
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
          <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} handleInputChange={handleInputChange} newMailbox={newMailbox}/>}/>
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />}/>
        </Routes>
      </Router>
    </>
  )
};

export default App;