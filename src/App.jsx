import React from 'react';
import './App.scss';
import Contacts from './components/Contacts';
import Filters from './components/Filters';
import getContacts from './api';
import Topbar from './components/Topbar';
import Loading from './components/Loading';
import { sortArrayByAttribute } from './utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsStorage: [],
      contacts: [],
      sort: {
        selectedSort: 'name',
        asc: true,
      },
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    getContacts().then((contacts) => {
      contacts = sortArrayByAttribute(
        contacts,
        this.state.sort.selectedSort,
        this.state.sort.asc
      );
      this.setState({ contactsStorage: contacts, contacts, isLoading: false });
    });
  }

  onChangeSearchFilter = (event) => {
    let contactsResult = this.state.contactsStorage;
    const value = event.target.value ? event.target.value.toLowerCase() : '';
    if (value) {
      contactsResult = this.state.contactsStorage.filter(
        (contact) => contact.name.toLowerCase().indexOf(value) >= 0
      );
      contactsResult = sortArrayByAttribute(
        contactsResult,
        this.state.sort.selectedSort,
        this.state.sort.asc
      );
    }
    this.setState({ contacts: contactsResult });
  };

  onSort = (event) => {
    const item = event.target.name;
    let asc = this.state.sort.asc;
    console.log('clicou >' + asc);
    if (this.state.sort.selectedSort === item) {
      asc = !asc;
      console.log('entrou >' + asc);
    }
    const sortedContacts = sortArrayByAttribute(this.state.contacts, item, asc);
    this.setState({
      contacts: sortedContacts,
      sort: { selectedSort: item, asc },
    });
  };

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters
          onChangeSearchFilter={this.onChangeSearchFilter}
          sort={this.state.sort}
          onSort={this.onSort}
        />
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <Contacts contacts={this.state.contacts} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
