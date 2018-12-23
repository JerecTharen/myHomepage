
class BTabService{
    private urlList: URLInterface[];
    private nextID: number;

    constructor(){
        this.urlList = [];
        this.nextID = 0;
    }

    getUrls(): URLInterface[]{
        // let result: string[] = [];
        // for (let i: number = 0; i < this.urlList.length; i++){
        //     result.push(this.urlList[i].url);
        // }
        // return result;
        return this.urlList;
    }
    addUrl(name: string, url: string): void{
        let newUrl: URLInterface = {
            name: name,
            url: url,
            id: this.nextID
        };
        this.nextID++;
        this.urlList.push(newUrl);
    }
    removeUrl(id: number): URLInterface | undefined{
        let result: URLInterface;
        for (let i: number = 0; i < this.urlList.length; i++){
            if(this.urlList[i].id === id){
                result = this.urlList[i];
                this.urlList.splice(i, 1);
                return result;
            }
        }
        return undefined;
    }
    setNextID(nextID: number): void{
        this.nextID = nextID;
    }
    editURL(id: number, name: string, url: string): boolean{
        let result: boolean = false;
        for (let i: number = 0; i < this.urlList.length; i++){
            if(this.urlList[i].id === id){
                this.urlList[i].name = name;
                this.urlList[i].url = url;
                result = true;
            }
        }
        return result;
    }
}
