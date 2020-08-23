import Button from './ui-library/button'
import '../dist/index.html'
let buttons = document.querySelectorAll(".btn");


buttons.forEach(item => {
    let button = new Button(item);
    button.init();
});