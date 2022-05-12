import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
function TableItem({ order: { orderNfId, buyer, provider, emissionDate, value, orderStatusBuyer }}){
  
  const changeDate = (emissionDate) => {
    const year = emissionDate.slice(0, 4)
    const month = emissionDate.slice(5, 7)
    const day = emissionDate.slice(8, 10)

    const timestamp = format(new Date(year, day, month), 'dd-MM-yyy');

    return timestamp.replace(/-/g, "/");
  }

  const changeValue = (value) => {
    const toNumber = Number(value)
    return toNumber.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  const orderStatus = (order) => {
    const status = ['Pendente de confirmação', 'Pedido confirmado', 'Não reconhece o pedido', 'Mercadoria não recebida', 'Recebida com avaria', 'Devolvida', 'Recebida com devolução parcial', 'Recebida e confirmada', 'Pagamento Autorizado']
    return status[Number(order)]
  }

  return (
    <li className="table-row">
      <div className="col col-1" data-label="orderNfId">{ orderNfId }</div>
      <div className="col col-2" data-label="buyer-name">{ buyer.name }</div>
      <div className="col col-3" data-label="provider-name">{ provider.name }</div>
      <div className="col col-4" data-label="emissionDate">{ changeDate(emissionDate) }</div>
      <div className="col col-5" id="value" data-label="value">{ changeValue(value) }</div>
      <div className="col col-6" id="status" data-label="orderStatusBuyer">{ orderStatus(orderStatusBuyer)}</div>
      <div className="col col-7" id="transferor" data-label="transferor data">Dados do cedente</div>
    </li>
  );
}


TableItem.propTypes = {
  order: PropTypes.arrayOf(PropTypes.object)
}.isRequired;

export default TableItem; 