export class BackgroundService {
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
    }
    getBackground(): string{
        return this.currentBackground;
    }
    refreshBackground(): BackgroundService{
        return new BackgroundService();
    }
}