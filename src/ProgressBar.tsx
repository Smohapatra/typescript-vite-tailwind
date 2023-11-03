import { useState, useEffect } from 'react';

type Props = {
    start: boolean,
    onComplete: () => void
};

export const ProgressBar = ({ start, onComplete }: Props) => {
    const [scale, setScale] = useState(0);

    useEffect(() => {
        if (!start || scale === 1) {
            return;
        }

        setScale(1);
    }, [start]);

    return (
        <div style={{ width: '260px', height: '40px', border: 'solid 1px white'}}>
            <div onTransitionEnd={() => onComplete()} style={{ height: '100%', transform: `scaleX(${scale})`, transformOrigin: 'left',  transition: 'transform ease-in-out 3s', background: 'green'}}></div>
        </div>
    );
}