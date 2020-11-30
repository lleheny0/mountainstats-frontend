import React from 'react';
import { shape, number, string, arrayOf } from 'prop-types';
import style from './style.module.css';

const Mountain = ({ run }) => (
  <div key={run.Id} className={style.run}>
    <div className={style.runName}>{run.name}</div>
    <div className={style.runType}>(Type {run.type})</div>
    {run.open ? (
      <div className={style.runIsOpen}>Open</div>
    ) : (
      <div className={style.runIsClosed}>Closed</div>
    )}
  </div>
);

Mountain.propTypes = {
  run: shape({
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
