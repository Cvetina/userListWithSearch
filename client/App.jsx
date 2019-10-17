import React from 'react';
import { connect } from 'react-redux';
import Users from './components/Users/Users';
import Header from './components/Users/Header';
import * as actions from './store/reducers/users';
import { descendingSortById, acsendingSortById } from './utils/helpers/contracts';
import style from './components/styles/Styles.scss';

@connect((store) => ({
  users: store.users.get('users'),
  search: store.form.get('search'),
  sort: store.form.get('sort')
}))
class App extends React.Component {
  fetchData() {
    this.props.dispatch(actions.getUsers());
  };

  componentDidMount() {
    this.fetchData();
  }

  render () {
    const { search, users, sort } = this.props;
    const searchMatch = new RegExp(`[a-zA-Z]*${search}[a-zA-Z]*`);
    const usersToDispaly = users.filter((user) =>  user.get('login').match(searchMatch));
    const sortedUsers = sort ? usersToDispaly.sortBy(descendingSortById) : usersToDispaly.sortBy(acsendingSortById) ;
    return (
      <div class={style.mainContainer}>
        <Header sort={sort} />
        <Users sortedUsers={sortedUsers} />
      </div>
    );
  }
}

export default App;
