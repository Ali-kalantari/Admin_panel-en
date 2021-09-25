import React from 'react';

export default function Button(props) {
    return (
       <button type='button' className={'Widget-lg-button ' + props.name}>
           {props.name}
       </button>
    )
}
