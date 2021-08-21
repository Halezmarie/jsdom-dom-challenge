// storing it in an object
const dom = {
counter: document.querySelector("#counter"),
plus: document.querySelector("#plus"),
minus: document.querySelector("#minus"),
pause: document.querySelector("#pause"),
heart: document.querySelector("#heart"),
// putting function into my dom action
getCount: function(){
    return parseInt(dom.counter.innerText)
    },
// know how to do basic selectors like .class, #id, and tags you call directly like "h1"
likes: document.querySelector(".likes"),
comments: document.getElementById("list"),
  commentForm: document.getElementById("comment-form"),
}

const state = {
    paused: false
}


// get the inner text from the counter and set it equal to it's current text + 1 - from a string to a number 
function count(num){
    if (!state.paused){
        dom.counter.innerText = dom.getCount() + num
    }
}

function togglePause(){
state.paused = !state.paused
// get every button from the dom and for each of them pass them into the call back function that takes in a button. if that button is not the pause button then toggle its disabled attribute. 
document.querySelectorAll("button").forEach(function(button){
    if (button.id !== "pause"){
        button.disabled = !button.disabled
    }
})
    // making toggle for resume and pausing the button

    if (pause.innerText == "pause") {
        pause.innerText = "resume"
    }   else {
        pause.innerText = "pause"
    }
}

function like(){
    const second = dom.getCount()
    const li = document.querySelector(`li[data-second='${second}']`)
    if (li){
      const newLikeCount = parseInt(li.querySelector("span").innerText) + 1
      li.innerHTML = `${second} has been liked <span>${newLikeCount}</span> times.`
    } else {
      dom.likes.innerHTML += `<li data-second=${second}>${second} has been liked <span>1</span> time.</li>`
    }
  }

  function handleComment(e){
    e.preventDefault()
    dom.comments.innerHTML += `<p>${e.target.comment.value}</p>`
    e.target.reset()
  }

// passing in an annoynmous function whose job is to call couunt with an argument of 1 
setInterval(() => count(1), 1000)
dom.plus.addEventListener("click", () => count(1))
dom.minus.addEventListener("click", () => count(-1))
dom.pause.addEventListener("click", togglePause)
dom.heart.addEventListener("click", like)
dom.commentForm.addEventListener("submit", handleComment)