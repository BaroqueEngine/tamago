(() => {
  "use strict";
  new p5((n) => {
    let e, o, t;
    function i() {
      (e = window.innerWidth),
        (o = window.innerHeight),
        n.resizeCanvas(e, o),
        (t = []);
      for (let n = 0; n < 10; n++)
        for (let i = 0; i < 10; i++) {
          const r = { x: (e / 9) * i, y: (o / 9) * n, vx: 0, vy: 0 };
          t.push(r);
        }
      n.frameCount = 0;
    }
    (n.setup = () => {
      n
        .createCanvas(window.innerWidth, window.innerHeight)
        .parent("canvas-container"),
        i();
    }),
      (n.draw = () => {
        if ((n.clear(), 100 == n.frameCount))
          for (const e of t) (e.vx = n.random(-2, 2)), (e.vy = n.random(-2, 2));
        for (const n of t)
          (n.x += n.vx),
            (n.y += n.vy),
            n.x < 0 && ((n.x = 0), (n.vx *= -1)),
            n.x >= e && ((n.x = e - 1), (n.vx *= -1)),
            n.y < 0 && ((n.y = 0), (n.vy *= -1)),
            n.y >= o && ((n.y = o - 1), (n.vy *= -1));
        for (let e = 0; e < 100; e++)
          for (let o = e + 1; o < 100; o++) {
            const i = t[e],
              r = t[o],
              a = n.dist(i.x, i.y, r.x, r.y);
            if (a < 200) {
              const e = n.map(a, 0, 200, 1, 0);
              n.noFill(),
                n.strokeWeight(6 * e),
                n.stroke(200, 200, 200, 255 * e),
                n.line(i.x, i.y, r.x, r.y);
            }
          }
        for (const e of t) {
          n.fill("#1a1a1a"), n.stroke("#aaa"), n.strokeWeight(2);
          const o = 10;
          n.circle(e.x, e.y, 2 * o);
        }
      }),
      (n.windowResized = () => {
        i();
      });
  });
})();
