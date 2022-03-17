const dots = document.getElementById("dots");
const more = document.querySelector(".more");
const readmore = document.querySelector(".readmorebtn");
const news = document.querySelector(".allnews");



news.addEventListener("click", (e) => {
    const current = e.target;

    const isReadMoreBtn = current.className.includes('readmorebtn');

    if(!isReadMoreBtn)return;

    const currentText = e.target.parentNode.querySelector('.more')

    currentText.classList.toggle('more-open')

    current.textContent = current.textContent.includes('Read more') ? 'Read less' : 'Read more';
})

