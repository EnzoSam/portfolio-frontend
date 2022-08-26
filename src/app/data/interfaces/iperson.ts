import { IEducation } from "./ieducation";
import { IExperience } from "./iexperience";
import { ISkill } from "./iskills";

export interface IPerson {
    id:any|undefined;
    name:string;
    lastname:string;
    about:string;
    address:string;
    profileImage:string;
    experiencies:IExperience[];
    educations:IEducation[];
    skills:ISkill[];
}