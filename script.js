function urlconv() {
  let daxab = document.getElementById("daxab-input").value;
  let x = daxab.split("watch/");
  document.getElementById(
    "vk-input"
  ).value = `https://vk.com/video${x[1]}#quality=480p`;
  document.getElementById(
    "goto-btn"
  ).href = `https://vk.com/video${x[1]}#quality=480p`;

  document.getElementById(
    "download"
  ).innerHTML = `<a id="download-btn" href="https://videograb.net/vk-video-downloader/#url=https://vk.com/video${x[1]}#quality=480p" target="_blank">download</a>`;
}

async function pastefromclip() {
  const text = await navigator.clipboard.readText();
  document.getElementById("daxab-input").value = text;
  urlconv();
}
