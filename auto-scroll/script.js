const panels = document.querySelectorAll(".panel")

let currentInterval;

document.addEventListener("keypress", (e) => {
    const panel = panels[e.key - 1]

    currentInterval = setInterval(() => {
        const top = panel.getBoundingClientRect().top
        
        if (top > 0) {
            if  (top > 10) {
                window.scrollBy(0, 10)
            } else if (top <=10) {
                window.scrollBy(0, top)
                clearInterval(currentInterval)
            }
        } else {
            if (top < -10) {
                window.scrollBy(0, -10)
            } else if(top >= -10) {
                window.scrollBy(0, top)
                clearInterval(currentInterval)
            }
        }
    }, 15)

    
})