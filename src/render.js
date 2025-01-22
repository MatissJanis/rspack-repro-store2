import store2 from 'store2';

import './render.css'

const retrievedValue = store2.get('hello');

export function render() {
    const el = document.createElement('div')
    el.classList.add('text')
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'

    console.log(retrievedValue)
}