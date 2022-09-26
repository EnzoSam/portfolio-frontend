import { IMilestone } from "./imilestone";
import { ISkill } from "./iskills";

export interface IPerson {
    id:any|undefined;
    name:string;
    lastName:string;
    about:string;
    address:string;
    profileImage:string;
    milestones:IMilestone[];
    skills:ISkill[];
}