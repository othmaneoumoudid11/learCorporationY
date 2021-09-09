import { Licence } from "./Licence.model";
import { User } from "./User.model";

export class DemAprvLic  {
    id_Approv ! : number ;
    date_Request ! : Date ;
    date_Approv ! : Date ;
    acceptee ! : boolean ;
    licence ! : Licence;
    user ! : User;
}