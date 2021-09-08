import { Software } from "./Software.model";
import { User } from "./User.model";

export class DemAprvSOf  {
    id_Approv ! : number ;
    date_Request ! : Date ;
    date_Approv ! : Date ;
    acceptee ! : boolean ;
    status ! : number ;
    software ! : Software;
    user ! : User;
}