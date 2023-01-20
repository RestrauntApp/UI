export class Restaurant {
    id: number =0;
    name: string = "";
    type: string = "";
    culture: string="";
    avgRevNum: number =0;

    constructor(id:number, name: string, type:string, cusine:string){
        this.id = id;
        this.name =name;
        this.type=type;
        this.culture=cusine;
        
    }
}
