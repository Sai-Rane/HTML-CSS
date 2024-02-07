const APIKEY = "810c4291511b4d90846059962bf8e670";
const url = "https://newsapi.org/v2/everything?q=";

//jab window load ho tab callback chalega
window.addEventListener("load", function () {
  console.log("load");
  fetchNews("India");
});

async function fetchNews(query) {
  const res = await fetch(
    `${url}${query}&apiKey=${APIKEY}`
  ); /*fetch is an async operation and async operation returns promise so you need to write await*/
  const data = await res.json();
  console.log("data", data);
  bindData(data.articles);
}

function bindData(articles) {
  console.log("articles", articles);
  //jitne articles hai utne he baar apne ko template banane hai aur us template ko banake crads-conatiner mai append karna hai
  const cardsContainer = document.getElementById("cards-container");
  const newsCardTemplate = document.getElementById("template-news-card");
  console.log("newsCardTemplate", newsCardTemplate);
  cardsContainer.innerHTML = ""; //setting it to empty

  articles.forEach((article) => {
    if (!article.urlToImage) return;

    const cardClone = newsCardTemplate.content.cloneNode(true); //to make deep clone and we have to append this clone in cards-container
    fillDataInCard(cardClone, article);
    cardsContainer.appendChild(cardClone);
  });
}

function fillDataInCard(cardClone, article) {
  const newsImg = cardClone.querySelector("#news-img");
  const newsTitle = cardClone.querySelector("#news-title");
  const newsSource = cardClone.querySelector("#news-source");
  const newsDesc = cardClone.querySelector("#news-desc");

  newsImg.src = article.urltoImage;
  newsTitle.innerHTML = article.title;
  newsDesc.innerHTML = article.description;

  const date = new Date(article.publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });
  newsSource.innerHTML = `${article.source.name} . ${date}`;
}
