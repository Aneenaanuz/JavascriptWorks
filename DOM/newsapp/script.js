fetch(`https://newsapi.org/v2/top-headlines?country=in&apikey=32e3b73ceeeb4e3396ab8365edfb7f97`).then(res=>res.json()).then(data=>console.log(data))

function displayNews(data){
    let htmlData= ""
    for(let article of data.articles){
        let image=article.urlToIamge;
        let pdate=article.publishedAt;
        let source=article.sourse.name;
        let content=article.content;
        let author=article.author;
        let title=article.title;
        let url=article.url;
        let description=article.description;

        htmlData+=`
        
        <div class="col-6">
        <div class="card" style="width: 18rem;">
          <img src="${image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${content}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div> `
    }
}