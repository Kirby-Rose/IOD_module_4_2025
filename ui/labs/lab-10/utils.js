// axios example
axios
  .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
  .then((response) => {
    console.log("response", response);
    response.data.forEach((item) => addItem(item));
  });

// clone, then populate, then append a new template
function addItem(item) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = item.title;
  template.querySelector(".card-text").innerText = item.body;
  document.querySelector("#post-list").appendChild(template);
}
