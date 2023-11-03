import { useEffect, useRef } from 'react';

export const useDebouncedValue = (callback: () => void, delay : number) => {
    const timerRef = useRef< number | null>(null);

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        }
    }, [])

    const debouncedCallback = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = window.setTimeout(() => {
            callback();
        }, delay);
    }

    return debouncedCallback;
}