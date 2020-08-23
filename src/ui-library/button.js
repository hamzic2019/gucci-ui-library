import './css/button.css'

class Button {
    constructor(button) {
        this.button = button;
        this.class = button.getAttribute('id');
    }
    init(){
        this.button.classList.add(this.class);
    }
}


export default Button;