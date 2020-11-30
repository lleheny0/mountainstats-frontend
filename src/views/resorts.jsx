import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { shape, string } from 'prop-types';
import Run from '../components/run';
import resorts from '../sample/resorts';
import style from './style.module.css';

const Resorts = ({ match }) => {
  const resort = resorts[match?.params?.resortId];

  return resort ? (
    <div>
      <div className={style.resortHeader}>
        <span className={style.resortName}>{resort.name}</span>
        <span className={style.date}>({new Date(resort.date).toString()})</span>
      </div>
      <div className={style.runsContainer}>
        <div className={style.runsHeader}>
          <div>Run</div>
          <div>Type</div>
          <div>Status</div>
        </div>
        {_.map(resort.runs, r => (
          <Run run={r} key={Math.random()} />
        ))}
      </div>
    </div>
  ) : (
    <div>
      Resort not found. Click <Link to="/">here</Link> to return home.
    </div>
  );
};

Resorts.propTypes = {
  match: shape({
    params: shape({
      resortId: string,
    }),
  }),
};

export default Resorts;
