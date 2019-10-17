import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import * as actions from '../../store/reducers/form';
import style from './../../components/styles/Styles.scss';

@connect((store) => ({
  value: store.form.get('search')
}))
class Header extends React.Component {

    handleSort = () => {
        this.props.dispatch(actions.sortDescending());
    }

    handleFieldChange = (event) => {
        event.preventDefault();
        this.props.dispatch(actions.updateSearch(event.target.value));
    };

    render () {
        const { value, sort } = this.props;
        const buttonStyle = classnames(style.button, {[style.arrow]: sort});

        return (
            <div class={style.header}>
                <button class={buttonStyle} onClick={this.handleSort}>
                    Sort by ID
                </button>
                <div class={style.item}>
                    <label>Search by login:</label>
                    <input class={style.input} onChange={this.handleFieldChange} value={value} />
                </div>
            </div>
        );
    }
}

export default Header;
