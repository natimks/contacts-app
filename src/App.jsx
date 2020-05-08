import React from 'react';
import './App.scss';
import Contacts from './components/Contacts';
import Filters from './components/Filters';
import getContacts from './api';
import Topbar from './components/Topbar';
import Loading from './components/Loading';
import { filterArray, sortArrayByAttribute } from './utils';

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
      wordSearch: '',
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
    const filterAttibute = this.state.sort.selectedSort;
    const value = event.target.value ? event.target.value.toLowerCase() : '';
    if (value) {
      contactsResult = filterArray(
        this.state.contactsStorage,
        filterAttibute,
        value
      );
      contactsResult = sortArrayByAttribute(
        contactsResult,
        this.state.sort.selectedSort,
        this.state.sort.asc
      );
    }
    this.setState({ contacts: contactsResult, wordSearch: value });
  };

  onSort = (event) => {
    const item = event.target.name;
    let asc = this.state.sort.asc;
    let contactsArray = this.state.contactsStorage;
    if (this.state.sort.selectedSort === item) {
      asc = !asc;
    }
    contactsArray = filterArray(contactsArray, item, this.state.wordSearch);
    const sortedContacts = sortArrayByAttribute(contactsArray, item, asc);
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
