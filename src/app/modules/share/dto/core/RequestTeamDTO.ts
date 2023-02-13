export class RequestTeamDTO{
  constructor(
    public propertyId:string,
    public teamName:string,
    public logo:Array<any>,
    public teamStar:number,
    public activeState:boolean,
    public verifiedState:boolean
  ) {
  }
}
