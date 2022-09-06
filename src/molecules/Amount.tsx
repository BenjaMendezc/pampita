import React, { ReactElement } from 'react';
import './Amount.scss';

type AmountProps = {
  stock: number;
}

function Amount({ stock }: AmountProps): ReactElement {
  return (
    <div className="Card-color-bar">
      <p className="Card-color-bar__amount">{stock}</p>
    </div>
  );
}


export default Amount