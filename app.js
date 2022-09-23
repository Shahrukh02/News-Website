
var body = document.querySelector('#body')
var imgBox = document.querySelector('.news_img')




async function getdata() {

    try {
        const res = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=907ed3b01a754a8ab8b705fb61e7e8cb')
        const data = await res.json()
        console.log(data);
        for(var i = 0 ; i <= data.articles.length ; i++){
            // console.log(data.articles[i].description);
            body.innerHTML += `
            <div class="main" data-aos="fade-left">
            <div class="main_container" >
            <div class="container">
            <div class="text">
                <div class="title">
                    <h2 class="title_underline">${data.articles[i].title}</h2>
                    <h3>${data.articles[i].description}</h3>
                </div>
                <div class="description">
                    <p>${data.articles[i].content} <a href="${data.articles[i].url}" target='_blank' class="readmore">Readmore</a></p>
                </div>
                <p>Published : <span class="publishdate">${data.articles[i].publishedAt}</span></p>
            </div>
        </div>
        </div>
        <div class="news_img">
            <img class="news_img" src="${data.articles[i].urlToImage}" alt="">
        </div>
        </div>
            `
        }
        
        
    } catch (err) {
        console.log(`the error is ${err}`);
    }


}

getdata()