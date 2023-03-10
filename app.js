const btns = document.querySelectorAll('.btn')
const singleQuestion = document.querySelectorAll('.single-question')[0]

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    const target = e.target

    btns.forEach(b => {
      const desc = b.parentElement.parentElement.children[1]

      if (target == b || target == b.children[0] || target == b.children[1]) {
        desc.classList.toggle('show-desc')
        b.childNodes[0].classList.toggle('hide-vertical')
      } else {
        desc.classList.remove('show-desc')
        b.childNodes[0].classList.remove('hide-vertical')
      }
    })
  })
})
