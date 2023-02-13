import {RequestTeamDTO} from "./RequestTeamDTO";

export class DealerProjectResponseDTO{
  public constructor(
     public propertyId:string,
     public teams:Array<RequestTeamDTO>,
     public projectName:string,
     public startedDate:Date,
     public  deadline:Date,
     public completness:number,
     public cost:number,
     public urgentState:string,
     public projectNature:string,
     public otherData:Array<any>,
     public client:string,
     public projectState:string,
  ) {
  }
}
