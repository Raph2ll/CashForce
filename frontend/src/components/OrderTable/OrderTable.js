import React, { useEffect, useState, useCallback, } from 'react';
import api from "../../services/api";
// import PropTypes from 'prop-types';
import './styles.css';
import TableItem from '../TableItem/TableItem';

function OrderTable() {
  const [orders, setOrders] = useState([]);

  const allOrders = useCallback(async () => {
    const resolve = await api();
    setOrders(resolve);
  }, [api]
  );

  useEffect(() => {
    allOrders();
  }, []);

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
      {
        orders.map((order) => (
          <TableItem
            order={ order }
            key={ order.id }
          />
        ))
      }
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
