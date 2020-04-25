import React from 'react';
import './ListPage.scss';
import List from './List';
function ListPage() {
  return (
    <div className="list-page">
      <div className="list-page__header">
        <div className="list-page__info-container">
          <h1 className="list-page__header">
            Korisnici
            <span> (20)</span>
          </h1>
          <p className="list-page__info">
            <span>200 </span>
            zarazenih
          </p>
        </div>
        <div className="list-page__search">
          <input
            type="text"
            className="input input--big"
            placeholder="Pretraga"
          />
        </div>
      </div>
      <div className="list-page__filters">
        <select className="input input--small select" placeholder="Status">
          <option value="" disabled selected>
            Status
          </option>
          <option></option>
        </select>
      </div>
      <List />
    </div>
  );
}

export default ListPage;
