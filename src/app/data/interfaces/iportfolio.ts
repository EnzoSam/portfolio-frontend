import { IMilestone } from "./imilestone";
import { IPerson } from "./iperson";
import { ISkill } from "./iskills";

export interface IPortfolio {
    id:any|undefined;
    person:IPerson,
    educations:IMilestone[];
    experiences:IMilestone[];
}