import React, {useContext} from 'react'
import {Button} from 'react-bootstrap'
import {TicketsContext} from '../../context/ticketsContext'

const GenerateButton = () => {
  const {generateRandomTicket} = useContext(TicketsContext);
  return (
    <div>
      <Button size="lg" variant="success" onClick={() => generateRandomTicket()}>Generar ticket</Button>
    </div>
  )
}

export default GenerateButton
