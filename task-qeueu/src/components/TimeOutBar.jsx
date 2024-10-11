import { useState, useEffect } from "react";

export default function TimeOutBar({ consumeTask, reset }) {
    const [width, setWidth] = useState(150);

    useEffect(() => {
        if (width > 0) {
            const timer = setTimeout(() => {
                setWidth(width - 30);
            }, 250);
            return () => clearTimeout(timer);
        } else if (width <= 0) {
            consumeTask();
            if (reset) {
                setWidth(150);
            }
        }
    }, [width, consumeTask, reset]);

    return (
        <div style={{ width: width, border: '1px solid white', height: '20px', float: 'left' }}>&nbsp;</div>
    );
}
