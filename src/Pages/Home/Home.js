import React from 'react';
import './Home.css'
import Charts from '../../components/charts/Charts';
import Featuredinfo from '../../components/Featuredinfo/Featuredinfo';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import WidgetLg from '../../components/WidgetLg/WidgetLg';

export default function Home() {
    return (
        <div className='home'>
            <Featuredinfo />
            <Charts />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg/>
            </div>
        </div>
    )
}
