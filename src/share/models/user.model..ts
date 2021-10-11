export class User{
  
    id : number ;
    name : string; 
    username : string;
    email : string;
    phone : string;
    website : string;
   address : address=new address();
   company : company = new company();
    // login : string ;
    // id : number ;
    // node_id : string ;
    // avatar_url : string ;
    // gravatar_id : string ;
    // url : string ;
    // html_url : string ;
    // followers_url : string ;
    // following_url : string ;
    // gists_url : string ;
    // starred_url : string ;
    // subscriptions_url : string ;
    // organizations_url : string ;
    // repos_url : string ;
    // events_url : string ;
    // received_events_url : string ;
    // type : string ;
    // site_admin : boolean ;
}
 class address {
    street : string;
    suite : string;
    city : string;
    zipcode : string;
    geo : geo = new geo();
}
  class geo{
     lat : string;
     lng : string;
 }
   class company{
     name : string;
     catchPhrase : string;
     bs : string;
 }