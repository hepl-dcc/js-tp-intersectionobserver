document.documentElement.classList.add('js-enabled');
const statusBox = document.getElementById("statusBox");
const statusText = document.getElementById("statusText");

function handler(entries, observer) {
  for (const entry of entries) {
    console.log(entries, observer)
    statusText.textContent = entry.isIntersecting;
    if (entry.isIntersecting) {
      statusBox.className = "yes";
    } else {
      statusBox.className = "no";
    }
  }
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}
const observer = new IntersectionObserver(handler, options);
observer.observe(document.getElementById("target"));
