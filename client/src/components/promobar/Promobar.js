import React from 'react';

import { Wrap, Promo, Number, Ph, Info } from './PromobarElements'

const Promobar = () => {

  return(
    <Wrap>
      <Promo>Call for a free quote today, so we can clean for you tomorrow!</Promo>
      <Info>
        <a href='tel:+18019139229'>
          <Ph>✆</Ph>
          <Number>801-913-9229</Number>
        </a>
      </Info>
    </Wrap>
  )
}

export default Promobar;