'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-btn')
    burgerBtn.addEventListener('click', () => {
        burgerBtn.getAttribute('aria-label') === 'Close navigation menu' 
            ? burgerBtn.setAttribute('aria-label', 'Open navigation menu')
            : burgerBtn.setAttribute('aria-label', 'Close navigation menu')
        burgerBtn.getAttribute('title') === 'Close navigation menu' 
            ? burgerBtn.setAttribute('title', 'Open navigation menu')
            : burgerBtn.setAttribute('title', 'Close navigation menu')
            
        document.querySelector('header').classList.toggle('is-open')
        document.querySelector('html').classList.toggle('is-lock')
    })
})