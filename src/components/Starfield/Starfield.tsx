import { useEffect, useRef } from "react";

import styles from "./Starfield.module.css";

// Based on Designly's react-starfield
const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const createStars = function (count: number) {
    const starsList = [];

    for (let i = 0; i < count; i++) {
      const newStar = {
        x: Math.random() * 1600 - 800,
        y: Math.random() * 900 - 450,
        z: Math.random() * 1000,
      };
      starsList.push(newStar);
    }

    return starsList;
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      if (canvas) {
        const context = canvas.getContext("2d");

        if (context) {
          let width = document.body.offsetWidth;
          let height = document.body.offsetHeight;

          const setCanvasExtents = () => {
            canvas.width = width;
            canvas.height = height;
          };

          setCanvasExtents();

          window.onresize = () => {
            setCanvasExtents();
          };

          const stars = createStars(2000);

          const clear = () => {
            context.fillStyle = "#000";
            context.fillRect(0, 0, canvas.width, canvas.height);
          };

          const putPixel = (x: number, y: number, brightness: number) => {
            const rgb = "rgba(255, 255, 255" + brightness + ")";
            context.fillStyle = rgb;
            context.fillRect(x, y, 1, 1);
          };

          const moveStars = (distance: number) => {
            const count = stars.length;
            for (let i = 0; i < count; i++) {
              const s = stars[i];
              s.z -= distance;
              while (s.z <= 1) {
                s.z += 1000;
              }
            }
          };

          let prevTime: number;
          const init = (time: number) => {
            prevTime = time;
            requestAnimationFrame(tick);
          };

          const tick = (time: number) => {
            const elapsed = time - prevTime;
            prevTime = time;

            moveStars(elapsed * 0.05);

            clear();

            const cx = width / 2;
            const cy = height / 2;

            const count = stars.length;
            for (let i = 0; i < count; i++) {
              const star = stars[i];

              const x = cx + star.x / (star.z * 0.001);
              const y = cy + star.y / (star.z * 0.001);

              if (x < 0 || x >= width || y < 0 || y >= height) {
                continue;
              }

              const d = star.z / 1000.0;
              const b = 1 - d * d;

              putPixel(x, y, b);
            }

            requestAnimationFrame(tick);
          };

          requestAnimationFrame(init);

          window.addEventListener("resize", function () {
            width = document.body.offsetWidth;
            height = document.body.offsetHeight;
            setCanvasExtents();
          });
        }
      }
    }

    return () => {
      window.onresize = null;
    };
  }, []);

  return <canvas ref={canvasRef} className={styles["starfield"]}></canvas>;
};

export default Starfield;
