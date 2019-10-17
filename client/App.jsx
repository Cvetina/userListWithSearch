import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/reducers/users';
import * as formActions from './store/reducers/form';
import { descendingSortById, acsendingSortById } from './helpers/contracts';
import Users from './components/Users/Users';
import Header from './components/Users/Header';
import style from './components/styles/Styles.scss';

@connect((store) => ({
  users: store.users.get('users'),
  search: store.form.get('search'),
  sort: store.form.get('sort'),
  value: store.form.get('search')
}))
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.getUsers());
  }
  
  handleSort = () => {
    this.props.dispatch(formActions.sortDescending());
  }

  handleFieldChange = (event) => {
      event.preventDefault();
      this.props.dispatch(formActions.updateSearch(event.target.value));
  };

  render () {
    const { search, users, sort, value } = this.props;
    const searchMatch = new RegExp(`[a-zA-Z]*${search}[a-zA-Z]*`);
    const usersToDispaly = users.filter((user) =>  user.get('login').match(searchMatch));
    const sortedUsers = sort ? usersToDispaly.sortBy(descendingSortById) : usersToDispaly.sortBy(acsendingSortById);

    return (
      <div class={style.mainContainer}>
        <Header sort={sort} value={value} handleSort={this.handleSort} handleFieldChange={this.handleFieldChange} />
        <Users sortedUsers={sortedUsers} />
      </div>
    );
  }
}

export default App;
