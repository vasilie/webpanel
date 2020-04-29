import React, {useState, useEffect} from 'react';
import './ListPage.scss';
import List from './List';
import ListInput from './ListInput';
import {statusFilterOptions, cityFilterOptions, listData} from '../consts';

function ListPage() {
  const initialFilter = {};
  const [filter, setFilter] = useState(initialFilter);

  const handleStatus = (e) => {
    setFilter({
      ...filter,
      status: e.target.value,
    });
  };
  const handleCity = (e) => {
    setFilter({
      ...filter,
      city: e.target.value,
    });
  };
  const handleSearch = (e) => {
    setFilter({
      ...filter,
      q: e.target.value,
    });
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);

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
      </div>
      <div className="list-page__filters">
        <ListInput
          className="input--big list-filter"
          placeholder="Pretraga"
          type="search"
          handleInput={handleSearch}
        />
        <ListInput
          className="input--big list-filter"
          options={statusFilterOptions}
          placeholder="Status"
          allPlaceholder="Svi statusi"
          type="select"
          handleInput={handleStatus}
        />
        <ListInput
          className="input--big list-filter"
          options={cityFilterOptions}
          placeholder="Opštine"
          allPlaceholder="Sve Opštine"
          type="select"
          handleInput={handleCity}
        />
      </div>
      <List data={listData} />
    </div>
  );
}

export default ListPage;
