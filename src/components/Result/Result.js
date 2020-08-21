import React, {useState, useContext} from 'react'
// import {motion} from 'framer-motion'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import {TicketsContext} from '../../context/ticketsContext'

const Result = () => {
  const [copied, setCopied] = useState(false)
  const {ticket} = useContext(TicketsContext);

  const copyToClipboard = () => {
    const copyText = document.getElementById("ticketID")
    copyText.select();
    document.execCommand('copy');
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1000);
  }
  return (
    <>
      {ticket ? (
      <div className="mt-5">
        
        <InputGroup className="mb-3">
          <FormControl
            id="ticketID"
            size="lg"
            placeholder="Nombre de ticket"
            aria-label="Nombre de ticket"
            aria-describedby="basic-addon2"
            onChange={() => {}}
            value={ticket}
          />
          <InputGroup.Append>
        <Button variant={copied ? 'success' : 'dark'} onClick={() => copyToClipboard()}>{copied ? 'Copiado':'Copiar'}</Button>
          </InputGroup.Append>
        </InputGroup>
        <p className="text-white"><strong>Sugerencia: </strong> Siga haciendo click en el botón de "Generar" hasta que el ticket tenga sentido.</p>
      </div>) : null}
    </>
  )
}

export default Result
