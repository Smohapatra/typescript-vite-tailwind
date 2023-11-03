import { useState } from 'react';

type Props = {
    images: string[]
}

const imagesPerSection = 4;
const wrapperWidth = 1550;
const sectionWidth = wrapperWidth / imagesPerSection;

export const Carousel = ({ images }: Props) => {
    const [translateWidth, setTranslateWidth] = useState(0);
    const maxTranslateWidth = sectionWidth * images.length - wrapperWidth;

    const prev = () => {
        setTranslateWidth(prev => {
            if (prev - wrapperWidth < 0) {
                return 0;
            }
            return prev - wrapperWidth;
        });
    }

    const next = () => {
        setTranslateWidth(prev => {
            if (prev + wrapperWidth > maxTranslateWidth) {
                return maxTranslateWidth;
            }
            return prev + wrapperWidth;
        });

    }

    return (
        <div style={{ width: `${wrapperWidth}px`, overflow: 'hidden', position: 'relative', border: 'solid 1px'}}>
            <ul style={{ display: 'flex', transform: `translateX(-${translateWidth}px)`, transition: 'transform ease-in-out 1s'}}>
                {images.map((image, idx) => (
                    <li key={idx} style={{ padding: '20px', flex: `0 0 ${100 / imagesPerSection}%`}}>
                        <img src={image} alt="random" />
                    </li>
                ))}
            </ul>
            <div style={{position: 'absolute', inset: 0, display: 'flex', justifyContent: 'space-between', margin: '10px', alignItems: 'center'}}>
                <button onClick={prev} disabled={translateWidth === 0} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'gray'}}>&lt;</button>
                <button onClick={next} disabled={translateWidth === maxTranslateWidth} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'gray'}}>&gt;</button>
            </div>
        </div>
    );
};