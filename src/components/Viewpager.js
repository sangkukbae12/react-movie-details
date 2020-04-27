import React, { useRef } from 'react';
import clamp from 'lodash-es/clamp';
import { useSprings, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';

const pages = [
  'https://m.media-amazon.com/images/M/MV5BZTlmYWQzNGUtZWZlZS00N2Q2LTk2ODktZjJmN2M2NzU1NTY1XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNzcwNjk4MjYtOTljNC00Njc0LThkYTMtZDJmYzZlZTJjOTU1XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMGVjNDRlZTUtYzkxZi00NTQ1LTgwYWUtMjA5NTM3YzdmMzc2XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMWQzYWZjODktNWE4Ni00YzIxLWE1MWMtNmU0MWZiMmIzZGMyXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMzAxNjAzNjktY2FkZC00NjU0LTk5ODItMDMyODQzOTAxMzFhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX1777_CR0,0,1777,750_AL_.jpg',
];

export default function Viewpager() {
  const index = useRef(0);
  const [props, set] = useSprings(pages.length, (i) => ({
    x: i * window.innerWidth,
    sc: 1,
    display: 'block',
  }));
  const bind = useGesture(
    ({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
      if (down && distance > window.innerWidth / 2)
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            pages.length - 1
          ))
        );
      set((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: 'none' };
        const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
        const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
        return { x, sc, display: 'block' };
      });
    }
  );
  return props.map(({ x, display, sc }, i) => (
    <animated.div
      {...bind()}
      key={i}
      style={{
        display,
        transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
      }}
    >
      <animated.div
        style={{
          transform: sc.interpolate((s) => `scale(${s})`),
          backgroundImage: `url(${pages[i]})`,
        }}
      />
    </animated.div>
  ));
}
