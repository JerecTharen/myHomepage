class BackgroundService {
    private backgrounds: Array<string> = [];
    private theDate: Date;
    private theHour: number;
    private theDay: number;
    // private theMinute: number;
    private timeInterval: number;
    private currentInterval: number;
    private currentBackground: string;
    constructor(){
        this.theDate = new Date();
        this.theHour = this.theDate.getHours();
        this.theDay = this.theDate.getDay() + 1;
        // this.theMinute = this.theDate.getMinutes();
        this.timeInterval = 168 / this.backgrounds.length;
        this.currentInterval = Math.floor(((this.theDay-1)*24 + this.theHour +1)/this.timeInterval);
        this.currentBackground = this.backgrounds[this.currentInterval];
    }
    addBackground(url: string): void{
        this.backgrounds.push(url);
        this.reInit();
    }
    getBackground(): string{
        return this.currentBackground;
    }
    refreshBackground(): BackgroundService{
        return new BackgroundService();
    }
    reInit(): void{
        this.theDate = new Date();
        this.theHour = this.theDate.getHours();
        this.theDay = this.theDate.getDay() + 1;
        this.timeInterval = 168 / this.backgrounds.length;
        this.currentInterval = Math.floor(((this.theDay-1)*24 + this.theHour +1)/this.timeInterval);
        this.currentBackground = this.backgrounds[this.currentInterval];
    }
    printInfo(): infoTemplate{
        let month: string = "";
        let weekday: string = "";
        let result: infoTemplate = {date: "", picNum: 0};
        switch(this.theDate.getMonth()){
            case 0:
                month = "January";
                break;
            case 1:
                month = "February";
                break;
            case 2:
                month = "March";
                break;
            case 3:
                month = "April";
                break;
            case 4:
                month = "May";
                break;
            case 5:
                month = "June";
                break;
            case 6:
                month = "July";
                break;
            case 7:
                month = "August";
                break;
            case 8:
                month = "September";
                break;
            case 9:
                month = "October";
                break;
            case 10:
                month = "November";
                break;
            case 11:
                month = "December";
                break;
        }
        switch(this.theDay){
            case 1:
                weekday = "Sunday";
                break;
            case 2:
                weekday = "Monday";
                break;
            case 3:
                weekday = "Tuesday";
                break;
            case 4:
                weekday = "Wednesday";
                break;
            case 5:
                weekday = "Thursday";
                break;
            case 6:
                weekday = "Friday";
                break;
            case 7:
                weekday = "Saturday";
                break;
        }
        result.date = `${weekday} ${month} ${this.theDate.getDate()}. The hour is ${this.theHour+1}`;
        result.picNum = this.currentInterval;
        return result;
    }
}

interface infoTemplate{
    date: string;
    picNum: number;
}