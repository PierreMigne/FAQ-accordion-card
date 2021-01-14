const allArrow = document.querySelectorAll('.arrow')
const allItems = document.querySelectorAll('li')
const allP = document.querySelectorAll('p')
const allTitles = document.querySelectorAll('h4')


allItems.forEach(item => {
    const tab = Array.from(item.children)
    item.addEventListener('click', () => {
        tab.forEach(child => {
            child.classList.toggle('active')
        })
    })
})
