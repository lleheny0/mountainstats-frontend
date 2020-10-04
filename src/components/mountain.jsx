import React from 'react';
import _ from 'lodash';
import { shape, number, string, arrayOf } from 'prop-types';
import style from './style.module.css';

const Mountain = ({ mountain }) => (
  <>
    <div className={style.mountainName}>{mountain.Name}</div>
    {_.map(mountain.Runs, r => (
      <div key={r.Id} className={style.run}>
        <div className={style.runName}>{r.Name}</div>
        <div className={style.runType}>(Type {r.Type})</div>
        {r.IsOpen ? (
          <div className={style.runIsOpen}>Open</div>
        ) : (
          <div className={style.runIsClosed}>Closed</div>
        )}
      </div>
    ))}
  </>
);

Mountain.propTypes = {
  mountain: shape({
    id: number,
    name: string,
    runs: arrayOf(
      shape({
        id: number,
      }),
    ),
  }),
};

export default Mountain;
