import React from 'react'
import { Link } from 'react-router-dom';
import './notfound.css';

export default function Notfound() {
    return (<div className='not-found'>
        <h1>There is no page with this url</h1>
<p>Oops! Something is wrong.</p>
<Link class="button" to="/"><i class="icon-home"></i> back to home.</Link>
</div>
    )
}
