import React from 'react';
import {Row, Col} from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = (cost, options, setOrderOption) => (
  <Row>
    {pricing.map((option) =>
      <Col md={4} key={option.id}>
        <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
        {console.log('options', options)}
      </Col>
    )}
    <Col xs={12}>
      <OrderSummary tripCost={cost} options={options}/>
    </Col>
  </Row>
);

export default OrderForm;
