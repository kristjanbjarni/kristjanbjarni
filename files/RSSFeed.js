function RSSFeed(RSS_URL,count,content_id)
{
  if (!count) count = 3;
  if (!content_id) content_id = 'content';
  fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    //console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    for (let i=0; i<Math.min(items.length,count); i++) {
      let el = items[i];
    //items.forEach(el => {
      html += `
          <li>
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("title").innerHTML}
            </a>
            <div class="description">${el.querySelector("description").innerHTML}</div>
          </li>
      `;
    }
    //);
    var content = document.getElementById(content_id);
    content.innerHTML = html;
  });
}