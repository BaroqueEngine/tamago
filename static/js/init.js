let id;
function update() {
  id = requestAnimationFrame(update);
  if (window.innerWidth > 0) {
    cancelAnimationFrame(id);

    const matches = String(window.location).match(/id=(.+)/);
    const script = document.createElement("script");
    script.src = "/static/code/" + matches[1] + "/main.js";
    document.body.appendChild(script);
  }
}
update();
