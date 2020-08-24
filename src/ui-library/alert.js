import './css/alert.css';

class Alert {
    constructor(alert){
        this.alert = alert
        this.class = alert.getAttribute('id');
    }

    init(){
        
    }
}

export default Alert;