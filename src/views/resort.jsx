import React from 'react';
import _ from 'lodash';
import Mountain from '../components/mountain';
import vail from '../sample/vail';
import style from './style.module.css';

const Resort = () => (
  <div>
    <div className={style.date}>{vail.Date}</div>
    <div className={style.mountainContainer}>
      {_.map(vail?.GroomingAreas, g => (
        <Mountain mountain={g} key={g.Id} />
      ))}
    </div>
  </div>
);

Resort.propTypes = {};

export default Resort;
