import {connect} from 'react-redux';

import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';

const mapStateToProps = (state, props) => {
  const options = getOrderOptions(state, props.options);
  return {
    options,
  };
};

const mapDispatchToProps = dispatch => ({
  setOrderOption: options => dispatch(setOrderOption(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
