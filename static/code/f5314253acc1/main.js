(() => {
  "use strict";
  new p5((n) => {
    let r, t, o;
    function i() {
      (r = window.innerWidth),
        (t = window.innerHeight),
        n.resizeCanvas(r, t),
        (o = []);
    }
    (n.setup = () => {
      n
        .createCanvas(window.innerWidth, window.innerHeight)
        .parent("canvas-container"),
        i();
    }),
      (n.draw = () => {
        if ((n.clear(), n.frameCount % 10 == 0)) {
          const i = {
            x: r / 2 + n.random(-2, 2),
            y: t / 2 + n.random(-2, 2),
            r: 1,
            maxr: n.random(50) + 50,
          };
          o.push(i);
        }
        for (const r of o)
          for (const t of o) {
            if (r === t) continue;
            const o = r.r + t.r,
              i = n.dist(r.x, r.y, t.x, t.y);
            if (i < o) {
              const n = (o - i) / 2,
                a = Math.atan2(t.y - r.y, t.x - r.x);
              (r.x -= Math.cos(a) * n),
                (r.y -= Math.sin(a) * n),
                (t.x += Math.cos(a) * n),
                (t.y += Math.sin(a) * n);
            }
          }
        for (const r of o)
          r.r++,
            (r.r = Math.min(r.r, r.maxr)),
            n.noFill(),
            n.stroke("#aaa"),
            n.circle(r.x, r.y, 2 * r.r);
        for (let n = 0; n < o.length; n++) {
          const i = o[n];
          (i.x + i.r < 0 ||
            i.x - i.r >= r ||
            i.y + i.r < 0 ||
            i.y - i.r >= t) &&
            (o.splice(n, 1), n--);
        }
      }),
      (n.windowResized = () => {
        i();
      });
  });
})();
