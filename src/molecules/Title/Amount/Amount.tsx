import React, { ReactElement } from 'react';
import './Amount.scss';

type AmountProps = {
  stock: number;
}

function Amount({ stock }: AmountProps): ReactElement {
  return (
    <div className="Amount-container">
      <p className="Amount">{stock}</p>
    </div>
  );
}


export default Amount
