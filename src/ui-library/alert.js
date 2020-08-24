import './css/alert.css';

class Alert {
    constructor(alert){
        this.alert = alert
        this.class = alert.getAttribute('id');
    }

    init(){
        console.log(this.alert);
        console.log(this.class);
    }
}

export default Alert;