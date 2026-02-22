import React from 'react';
import { MacbookScroll } from './ui/macbook-scroll';
import homeImg from '../assets/home.png';

const LandingAnimation = ({ onComplete }) => {
    return (
        <div className="bg-[#07070d] w-full relative overflow-hidden">
            <MacbookScroll
                src={homeImg}
                showGradient={false}
                title={
                    <span className="text-white text-3xl md:text-5xl font-bold font-sans tracking-tight">
                        Welcome to my universe. <br />
                        <span className="text-sm font-normal text-neutral-400 mt-2 block">
                            Scroll down to explore
                        </span>
                    </span>
                }
            />
        </div>
    );
};

export default LandingAnimation;
