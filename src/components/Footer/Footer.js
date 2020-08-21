import React, {useState} from 'react'

import './Footer.css'

const Footer = () => {
  const [expandFooter, setExpandFooter] = useState(false)
  return (
    <footer className={`footer ${expandFooter ? 'expanded':''}`} onMouseEnter={() => setExpandFooter(true)} onMouseLeave={() => setExpandFooter(false)}>
      <p className="mb-0 py-3">Para sugerir alguna mejora de cualquier tipo, puedes hacerlo enviando un correo a <a href="mailto:ojsm45@gmail.com">ojsm45@gmail.com</a></p>
      <p>P.D.: El autor no se hace responsable de las puteadas que pueda recibir debido al mal uso de la app.</p>
    </footer>
  )
}

export default Footer
