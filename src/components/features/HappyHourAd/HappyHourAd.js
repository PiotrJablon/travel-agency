import React from 'react';
import PropTypes from 'prop-types';

import {formatTime} from '../../../utils/formatTime';

import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component{
  constructor(){
    super();

    setInterval(() => {
      {this.forceUpdate();}
    }, 1000);
  }

  static defaultProps = {
    title: 'Happy Hour Incoming!',
    promoDescription: `Now It's your time! Take advantage of Happy Hour! All offers 20% off!`,
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render(){
    const {title, promoDescription} = this.props;
    const countdown = this.getCountdownTime();
    return(
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>
          {countdown > 82800 ? `${promoDescription}` : formatTime(countdown) }
        </div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default HappyHourAd;
