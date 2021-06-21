import React from 'react';
import {Row, Col} from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = (cost, options) => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={cost} options={options}/>
    </Col>
  </Row>
);

export default OrderForm;
