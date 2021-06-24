(() => {
  "use strict";
  new p5((n) => {
    function t(t) {
      const a = n.random(n.TWO_PI),
        e = n.random(10);
      return t + Math.cos(a) * e;
    }
    function a(a, e, r, o) {
      const s = t(a),
        c = t(e),
        i = t(r),
        l = t(o),
        h = i - s,
        p = l - c,
        f = n.atan2(l - c, i - s) - 0.1,
        u = n.lerp(s, s + Math.cos(f) * h, 0.5),
        M = n.lerp(c, c + Math.sin(f) * p, 0.5),
        d = n.lerp(s, s + Math.cos(f) * h, 0.75),
        m = n.lerp(c, c + Math.sin(f) * p, 0.75),
        v = [4, 5, 6],
        g = n.floor(n.random(v.length));
      n.strokeWeight(v[g]), n.bezier(s, c, u, M, d, m, i, l);
    }
    n.setup = () => {
      var t, e;
      n.createCanvas(800, 800).parent("canvas-container"),
        n.noFill(),
        n.stroke("#ff9900"),
        a((t = 200), (e = 200), t + 200, e),
        a(t, e, t, 400),
        a(400, e, 400, 400),
        a(t, 400, 400, 400);
    };
  });
})();
