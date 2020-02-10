var carousel = document.getElementsByClassName("carouselHolder")[0];
var inner = carousel.getElementsByTagName("ul")[0]
function next()
{
carousel.scrollBy({
left:220,
behavior:"smooth"
})
}

function previous()
{
carousel.scrollBy({
    left:-220,
    behavior:"smooth"
})
}


//FOCUS SCRIPT FOR SEARCH BAR

var search = document.getElementsByClassName("search")[0]

function searchFocus(){
    search.style.border="3px solid #7fd140"
}

function searchBlur(){
    search.style.border="3px solid rgba(0,0,0,0)"
}
