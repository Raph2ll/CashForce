import React from 'react';
// import PropTypes from 'prop-types';
import './styles.css';
// import TableItem from './TableItem';

function OrderTable() {
  return (
    <ul className="responsive-table">
      <li className="table-header">
        <div className="col col-1">NOTA FISCAL</div>
        <div className="col col-2">SACADO</div>
        <div className="col col-3">CEDENTE</div>
        <div className="col col-4">EMISSÃO</div>
        <div className="col col-5">VALOR</div>
        <div className="col col-6">STATUS</div>
        <div className="col col-7"></div>

      </li>
      <li className="table-row">
        <div className="col col-1" data-label="orderNfId">123</div>
        <div className="col col-2" data-label="buyer-name">SACADO 001</div>
        <div className="col col-3" data-label="provider-name">CEDENTE 002</div>
        <div className="col col-4" data-label="emissionDate">12/02/2020</div>
        <div className="col col-5" id="value" data-label="value">R$ 49.725,00</div>
        <div className="col col-6" id="status" data-label="orderStatusBuyer">confirmado</div>
        <div className="col col-7"  id="transferor" data-label="transferor data">Dados do cedente</div>
      </li>
    </ul>
  );
}
/*
OrderTable.propTypes = {
  Products: PropTypes.arrayOf(PropTypes.object),
  Remove: PropTypes.bool,
  totalPrice: PropTypes.string,
  isSeller: PropTypes.bool,
}.isRequired;
*/
export default OrderTable;
