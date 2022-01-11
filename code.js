document.querySelector("#intro").addEventListener('click', () => {
    document.querySelector("#intro").classList.add("hidden")
    document.querySelector("#content").style.display = "block"
    document.querySelector("#bottombar").style.display = "block"
})