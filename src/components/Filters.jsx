import React from 'react';
import SimpleFilter from './SimpleFilter';

class Filters extends React.Component {
  render() {
    const simplesFilter = [
      { name: 'Nome', filterKey: 'name' },
      { name: 'País', filterKey: 'country' },
      { name: 'Empresa', filterKey: 'company' },
      { name: 'Departamento', filterKey: 'department' },
      { name: 'Data de admissão', filterKey: 'admissionDate' },
    ];

    return (
      <div className='container' data-testid="filters">
        <section className='filters' >
          <div className='filters__search'>
            <input
              type='text'
              className='filters__search__input'
              onChange={this.props.onChangeSearchFilter}
              placeholder='Pesquisar'
            />

            <button className='filters__search__icon'>
              <i className='fa fa-search' />
            </button>
          </div>

          {simplesFilter.map((item) => (
            <SimpleFilter
              name={item.name}
              key={item.filterKey}
              filterKey={item.filterKey}
              onSort={this.props.onSort}
              sort={this.props.sort}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Filters;
