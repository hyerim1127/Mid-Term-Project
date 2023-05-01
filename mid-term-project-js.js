const clicks = document.querySelectorAll(".click")
const sections = document.querySelectorAll("section")
const details = document.querySelectorAll(".like-img")

const top1 = sections[0].offsetTop
const top2 = sections[1].offsetTop
const top3 = sections[2].offsetTop
const top4 = sections[3].offsetTop
const top5 = sections[4].offsetTop

clicks[0].onclick = function() {
    window.scroll({top:top1, behavior:'smooth'})
}
clicks[1].onclick = function() {
    window.scroll({top:top2, behavior:'smooth'})
}
clicks[2].onclick = function() {
    window.scroll({top:top3, behavior:'smooth'})
}
clicks[3].onclick = function() {
    window.scroll({top:top4, behavior:'smooth'})
}
clicks[4].onclick = function() {
    window.scroll({top:top5, behavior:'smooth'})
}

details[4].onclick = function() {
    window.scroll({top:top5, behavior: 'smooth'})
}