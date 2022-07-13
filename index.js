function toggleLinks(){
    let links = document.getElementById("links-container")
    let carrot = document.getElementById("carrot")
    let text = document.getElementById('toggle-btn-text')
    
    console.log(text.innerHTML)

    links.classList.toggle("hidden")
    carrot.classList.toggle("rotated")
    text.innerHTML === 'show less' ? text.innerHTML = 'show more': text.innerHTML = 'show less'
}