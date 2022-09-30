import { IPlace } from "./iplace";

export interface IMilestone {
    id:any|undefined;
    place?:IPlace;
    fromDate:Date;
    toDate:Date;
    name:string;
    description:string;
    type:string;
    image:string;
}