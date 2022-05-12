import React from 'react';
import CashForce from '../../icons/CashForce.png';
import handShake from '../../icons/handshake.svg'
import OrderTable from '../../components/OrderTable/OrderTable';
import './style.css';

function Invoices() {
  return (
    <div className='container'>
      <div className='sidebar-container'>
      <img src={ CashForce } alt='this is a CashForce logo' />
        <ul className='sidebar-container'>
            <li>
              <img src={ handShake } alt="HandShake SVG"></img>
              Notas fiscais
            </li>
        </ul>
      </div>
      <div className='main-content'>
        <div className='header-sistema'>
        </div>
        <div className='frame'>
          <div className='handShake' >
            <img src={ handShake } alt="HandShake SVG"></img>
            <p>Notas fiscais</p>
          </div>
          <p className='proposal'>Visualize as notas fiscais que você tem.</p>
        </div>
          <OrderTable />
      </div>
    </div>
  );
}

export default Invoices;