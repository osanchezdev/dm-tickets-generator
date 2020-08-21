import React, {createContext, useState} from 'react';
import {oneOfType, arrayOf, node} from 'prop-types';
import _ from 'lodash';

import {VERBS, ELEMENTS, PAGES} from '../constants'

export const TicketsContext = createContext();

const TicketsProvider = ({children}) => {
  const [ticket, setTicket] = useState(null);

 
  const generateRandomTicket = () => {
    setTicket(`${VERBS[_.random(0, VERBS.length - 1)]} ${ELEMENTS[_.random(0, ELEMENTS.length - 1)]} ${PAGES[_.random(0, PAGES.length - 1)]}`)
  }
  
  return (
    <TicketsContext.Provider
      value={{
        ticket,
        generateRandomTicket,
      }}>
      {children}
    </TicketsContext.Provider>
  );
};

TicketsProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default TicketsProvider;