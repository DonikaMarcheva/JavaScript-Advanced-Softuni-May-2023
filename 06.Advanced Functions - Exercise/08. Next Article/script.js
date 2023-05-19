function getArticleGenerator(articles) {
    let div = document.getElementById('content');
    let parsedArticles = JSON.parse(JSON.stringify(articles));
    //or parsedArticles=Array.from(articles);
    function inner() {
        for (const article of parsedArticles) {
            parsedArticles.shift();
            let newArticle = document.createElement('article');
            newArticle.textContent = article;
            div.appendChild(newArticle);
            return;
        }
    }
    return inner;
}
