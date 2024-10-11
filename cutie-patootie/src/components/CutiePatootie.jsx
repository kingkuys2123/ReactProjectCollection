import React, { useState, useEffect, useRef } from 'react';
import './styles/CutiePatootie.css';

export default function CutiePatootie() {
  const [position, setPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);

  const [frame, setFrame] = useState(0);
  const [direction, setDirection] = useState('right');

  const [isMoving, setIsMoving] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isDucking, setIsDucking] = useState(false);
  const [isFalling, setIsFalling] = useState(false);

  const [health, setHealth] = useState(100);
  const [isGameOver, setIsGameOver] = useState(false);
  const [bullets, setBullets] = useState([]);

  const intervalId = useRef(null);
  const bulletIntervalId = useRef(null);

  const gravity = 15;
  const jumpHeight = 150;
  const groundLevel = 0;
  const walkingSpeed = 15;
  const duckingOffset = 20;

  const areaWidth = 0.25 * window.innerWidth;
  const screenHeight = 400;

  useEffect(() => {
    const keysPressed = {};

    const handleKeyDown = (event) => {
      keysPressed[event.key] = true;

      if (keysPressed['a'] || keysPressed['A']) {
        setDirection('left');

        setIsMoving(true);
      }

      if (keysPressed['d'] || keysPressed['D']) {
        setDirection('right');

        setIsMoving(true);
      }

      if (keysPressed['w'] || keysPressed['W']) {
        if (!isJumping && yPosition === groundLevel) {
          setIsJumping(true);
        }
      }

      if (keysPressed['s'] || keysPressed['S']) {
        setIsDucking(true);
      }
    };

    const handleKeyUp = (event) => {
      delete keysPressed[event.key];

      if (!keysPressed['a'] && !keysPressed['A'] && !keysPressed['d'] && !keysPressed['D']) {
        setIsMoving(false);
      }

      if (!keysPressed['s'] && !keysPressed['S']) {
        setIsDucking(false);
      }
    };

    const updateFrameAndPosition = () => {
      if (!isDucking) {
        setFrame((prevFrame) => (prevFrame + 1) % 5);

        setPosition((prevPosition) => {
          const newPosition = direction === 'left' ? prevPosition - walkingSpeed : prevPosition + walkingSpeed;

          if (newPosition < 0 || newPosition > areaWidth) {
            setIsFalling(true);
          }

          return newPosition;
        });
      }
    };

    const applyGravity = () => {
      setYPosition((prevYPosition) => {
        if (prevYPosition > groundLevel || isFalling) {
          return prevYPosition - gravity;
        }
        return prevYPosition;
      });

    };

    const handleJump = () => {
      setYPosition((prevYPosition) => {
        if (prevYPosition < jumpHeight) {
          return prevYPosition + gravity;
        } 
        else {
          setIsJumping(false);

          return prevYPosition;
        }
      });
    };

    const checkCollision = () => {
      if (yPosition < -screenHeight) {
        setHealth((prevHealth) => Math.max(prevHealth - 100, 0));
        setIsFalling(false);

        if (health <= 0) {
          setIsGameOver(true);
        }
      }
    };

    const update = () => {
      if (isMoving) {
        updateFrameAndPosition();
      }

      if (isJumping) {
        handleJump();
      } 
      else {
        applyGravity();
      }

      checkCollision();
      moveBullets();
      detectBulletCollision();

    };

    if (!isGameOver) {
      intervalId.current = setInterval(update, 50);
      bulletIntervalId.current = setInterval(generateBullets, 1000);
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);

      clearInterval(intervalId.current);
      clearInterval(bulletIntervalId.current);
    };
  }, [isMoving, direction, isJumping, yPosition, isDucking, isFalling, isGameOver]);

  const generateBullets = () => {
    const newBullets = [];

    newBullets.push({ x: Math.random() * window.innerWidth, y: 0, direction: 'down', src: 'public/resources/bullet_v.png' });
    newBullets.push({ x: 0, y: Math.random() * window.innerHeight, direction: 'right', src: 'public/resources/bullet_h.png' });
    newBullets.push({ x: window.innerWidth, y: Math.random() * window.innerHeight, direction: 'left', src: 'public/resources/bullet_h.png' });

    setBullets((prevBullets) => [...prevBullets, ...newBullets]);
  };

  const moveBullets = () => {
    setBullets((prevBullets) =>
      prevBullets.map((bullet) => {
        switch (bullet.direction) {
          case 'down':
            return { ...bullet, y: bullet.y + 10 };
          case 'right':
            return { ...bullet, x: bullet.x + 10 };
          case 'left':
            return { ...bullet, x: bullet.x - 10 };
          default:
            return bullet;
        }
      }).filter(bullet => bullet.x >= 0 && bullet.x <= window.innerWidth && bullet.y >= 0 && bullet.y <= window.innerHeight)
    );
  };

  const detectBulletCollision = () => {
    setBullets((prevBullets) => {
      return prevBullets.filter((bullet) => {
        const cutieRect = document.getElementById('cutie').getBoundingClientRect();
        const bulletRect = {
          left: bullet.x,
          top: bullet.y,
          right: bullet.x + 75,
          bottom: bullet.y + 75,
        };

        if (
          cutieRect.left < bulletRect.right &&
          cutieRect.right > bulletRect.left &&
          cutieRect.top < bulletRect.bottom &&
          cutieRect.bottom > bulletRect.top
        ) {
          setHealth((prevHealth) => Math.max(prevHealth - 20, 0));
          if (health <= 20) {
            setIsGameOver(true);
          }
          return false; 
        }
        return true; 
      });
    });
  };

  const getImageSrc = () => {
    if (isDucking) {
      return direction === 'down'
        ? `../resources/dock-5.png`
        : `../resources/dock-5.png`;
    }
    if (!isMoving) {
      return direction === 'left'
        ? `../resources/left-1.png`
        : `../resources/right-1.png`;
    }
    return direction === 'left'
      ? `../resources/left-${frame + 1}.png`
      : `../resources/right-${frame + 1}.png`;
  };

  const getHealthBarWidth = () => {
    return `${health}%`;
  };

  const handleRetry = () => {
    setPosition(0);
    setYPosition(0);
    setFrame(0);
    setDirection('right');
    setIsMoving(false);
    setIsJumping(false);
    setIsDucking(false);
    setIsFalling(false);
    setHealth(100);
    setIsGameOver(false);
    setBullets([]);
  };

  return (
    <div className="CutiePatootie">
      <div className="background">

        <div className="area-container" id="area-container">

          <div className="cutie" style={{ transform: `translate(${position}px, ${-yPosition + (isDucking ? duckingOffset : 0)}px)` }}>
            <img className="cutie" id="cutie" src={getImageSrc()} alt="Cutie" />
          </div>

          <img className="area" id="area" src="/public/resources/area.png" alt="Area" />

        </div>

        <div className="health-bar-container">
          <div className="health-bar" style={{ width: getHealthBarWidth() }}></div>
        </div>

        {bullets.map((bullet, index) => (
          <img
            key={index}
            className="bullet"
            src={bullet.src}
            style={{
              position: 'absolute',
              left: bullet.x,
              top: bullet.y,
              transform: bullet.direction === 'right' ? 'scaleX(-1)' : 'none',
              width: '50px',
              height: '50px',
            }}
            alt="Bullet"
          />
        ))}

        {isGameOver && (
          <div className="game-over">
            <h1>Game Over</h1>
            <button onClick={handleRetry}>Retry</button>
          </div>
        )}

      </div>

    </div>
  );
}