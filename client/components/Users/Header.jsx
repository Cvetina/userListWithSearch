import React from 'react';
import classnames from 'classnames';
import style from './../../components/styles/Styles.scss';

const Header = ( { value, sort, handleSort, handleFieldChange } ) => {
    const buttonStyle = classnames(style.button, {[style.arrow]: sort});
    return (
        <div class={style.header}>
            <button class={buttonStyle} onClick={handleSort}>
                Sort by ID
            </button>
            <div class={style.item}>
                <label>Search by login:</label>
                <input class={style.input} onChange={handleFieldChange} value={value} />
            </div>
        </div>
    );
}

export default Header;
