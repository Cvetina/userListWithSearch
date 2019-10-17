  import React from 'react';
  import style from './../../components/styles/Styles.scss';

  const Users = ({ sortedUsers }) => {
    return (
      <div class={style.wrapper}>
          <div class={style.row}>
              <div class={style.item}>ID</div>
              <div class={style.item}>Avatar</div>
              <div class={style.item}>Login</div>
              <div class={style.item}>Type</div>
          </div>
          {sortedUsers.size > 0 
            ? sortedUsers.map((users) => (
              <div key={users.get('id')} class={style.row}>
                  <div class={style.item}>{users.get('id')}</div>
                  <div class={style.item}><img class={style.image} src={users.get('avatar_url')} /></div>
                  <div class={style.item}>{users.get('login')}</div>
                  <div class={style.item}>{users.get('type')}</div>
              </div>
              ))
              : <div class={style.noResults}>No Search Results</div>
          }
      </div>
    );
  }

  export default Users;
