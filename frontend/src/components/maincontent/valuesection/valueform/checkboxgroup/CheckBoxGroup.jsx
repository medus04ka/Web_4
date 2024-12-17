import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './CheckBoxGroup.style.css';
import CheckBox from './checkbox/CheckBox';

const CheckBoxGroup = (props) => {
    return (
        <ul className="checkbox-list">
            {props.groupValues.map(value => (
                <li className="checkbox-list__item" key={value}>
                    <CheckBox value={value} valueCurrent={props.valueCurrent} selectValue={props.selectValue} />
                </li>
            ))}
        </ul>
    );
}

export default CSSModules(CheckBoxGroup, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });