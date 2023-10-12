import React from 'react';
import './index.scss'
import {useSpring, animated} from "react-spring";


function Number ({n}) {
    const {number} = useSpring({
        from: {number: 0},
        number: n,
        delay: 200,
        config: {mass: 1, tension: 20, friction: 10},
    });

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

const Loading = ({load}) => {
    return (
        <div id="load">
            <div className="load--bg"/>
            <div className={'load'} style={{
                display: load ? "block" : "none",
            }}>
                <h1><span><Number n={100}/></span> <span>%</span></h1>
            </div>
        </div>
    );
};

export default Loading;