import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LandingAnimation.css';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 149;
const FRAME_PATH = '/frames/ezgif-frame-';

const getFrameSrc = (index) => {
    const num = String(index).padStart(3, '0');
    return `${FRAME_PATH}${num}.jpg`;
};

const LandingAnimation = ({ onComplete }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const imagesRef = useRef([]);
    const [loaded, setLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);
    const [animationDone, setAnimationDone] = useState(false);

    // Preload all frames
    useEffect(() => {
        let loadedCount = 0;
        const images = [];

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            img.src = getFrameSrc(i);
            img.onload = () => {
                loadedCount++;
                setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                if (loadedCount === FRAME_COUNT) {
                    setLoaded(true);
                }
            };
            images.push(img);
        }

        imagesRef.current = images;
    }, []);

    // Draw a frame onto the canvas
    const drawFrame = useCallback((index) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const img = imagesRef.current[index];
        if (!img) return;

        // Set canvas size to match image aspect ratio within viewport
        const dpr = window.devicePixelRatio || 1;
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        canvas.width = vw * dpr;
        canvas.height = vh * dpr;
        canvas.style.width = `${vw}px`;
        canvas.style.height = `${vh}px`;
        ctx.scale(dpr, dpr);

        // Draw image covering the canvas (object-fit: cover behavior)
        const imgRatio = img.width / img.height;
        const canvasRatio = vw / vh;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgRatio > canvasRatio) {
            drawHeight = vh;
            drawWidth = vh * imgRatio;
            offsetX = (vw - drawWidth) / 2;
            offsetY = 0;
        } else {
            drawWidth = vw;
            drawHeight = vw / imgRatio;
            offsetX = 0;
            offsetY = (vh - drawHeight) / 2;
        }

        ctx.clearRect(0, 0, vw, vh);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }, []);

    // Set up GSAP ScrollTrigger once images are loaded
    useEffect(() => {
        if (!loaded) return;

        // Draw the first frame immediately
        drawFrame(0);

        const obj = { frame: 0 };

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.5,
                onUpdate: (self) => {
                    // When scroll reaches the end, mark animation done
                    if (self.progress >= 0.98) {
                        setAnimationDone(true);
                    }
                },
            },
        });

        tl.to(obj, {
            frame: FRAME_COUNT - 1,
            ease: 'none',
            snap: 'frame',
            onUpdate: () => {
                drawFrame(Math.round(obj.frame));
            },
        });

        // Handle resize
        const handleResize = () => {
            drawFrame(Math.round(obj.frame));
        };
        window.addEventListener('resize', handleResize);

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
            window.removeEventListener('resize', handleResize);
        };
    }, [loaded, drawFrame]);

    // When animation is done and user continues scrolling, complete
    useEffect(() => {
        if (animationDone && onComplete) {
            onComplete();
        }
    }, [animationDone, onComplete]);

    const handleSkip = () => {
        setAnimationDone(true);
        if (onComplete) onComplete();
        // Scroll past the animation container
        if (containerRef.current) {
            const containerEnd = containerRef.current.offsetTop + containerRef.current.offsetHeight;
            window.scrollTo({ top: containerEnd, behavior: 'smooth' });
        }
    };

    return (
        <div
            ref={containerRef}
            className={`landing-scroll-container ${animationDone ? 'animation-complete' : ''}`}
        >
            {/* Loading screen */}
            {!loaded && (
                <div className="landing-loader">
                    <div className="loader-content">
                        <div className="loader-text">
                            <span className="loader-bracket">[</span>
                            <span className="loader-progress">{loadProgress}%</span>
                            <span className="loader-bracket">]</span>
                        </div>
                        <div className="loader-bar">
                            <div
                                className="loader-bar-fill"
                                style={{ width: `${loadProgress}%` }}
                            />
                        </div>
                        <div className="loader-label">Loading experience...</div>
                    </div>
                </div>
            )}

            {/* Sticky canvas */}
            <div className="landing-sticky">
                <canvas
                    ref={canvasRef}
                    className="landing-canvas"
                />

                {/* Overlay that fades out as animation nears completion */}
                <div
                    className={`landing-overlay ${animationDone ? 'fade-out' : ''}`}
                />

                {/* Skip button */}
                {loaded && !animationDone && (
                    <button
                        className="skip-btn"
                        onClick={handleSkip}
                    >
                        Skip Intro →
                    </button>
                )}

                {/* Scroll hint */}
                {loaded && !animationDone && (
                    <div className="scroll-hint">
                        <div className="scroll-hint-text">Scroll to explore</div>
                        <div className="scroll-hint-arrow">↓</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LandingAnimation;
