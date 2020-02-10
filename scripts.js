var carousel = document.getElementsByClassName("carouselHolder")[0];
var inner = carousel.getElementsByTagName("ul")[0]
function next()
{
carousel.scrollBy({
left:120,
behavior:"smooth"
})
}

function previous()
{
carousel.scrollBy({
    left:-120,
    behavior:"smooth"
})
}
