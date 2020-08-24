import Button from './ui-library/button'
import Alert from './ui-library/alert'
import '../dist/index.html'
let buttons = document.querySelectorAll(".btn");
let alerts = document.querySelectorAll('.alert');


buttons.forEach(item => {
    let button = new Button(item);
    button.init();
});


alerts.forEach(al => {
    let alert = new Alert(al);
    alert.init();
})