// ===== include.js =====

export function loadHTMLPartials() {
  const includes = document.querySelectorAll("[include-html]");
  const promises = Array.from(includes).map(el => {
    const file = el.getAttribute("include-html");
    return fetch(file)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load partial: ${file} (${res.status} ${res.statusText})`);
        }
        return res.text();
      })
      .then(data => {
        el.innerHTML = data;
        el.removeAttribute("include-html");
      })
      .catch(err => {
        el.innerHTML = `<p>Error loading ${file}</p>`;
        console.error(err);
        // Re-throw to make Promise.all fail
        throw err;
      });
  });

  return Promise.all(promises);
}

