export interface ISeries{
  Featured:any[];
  Meta: any[];
  Content: any[]
 }

 export interface Content {
   result: {};
 }

 export interface result {
  rank: string;
  id:string;
  tag:string;
  title:string;
  summary:string;
  url: string;
  author_name: string;
  provider_publish_time:string;
  provider_name: string;
  hosted:string;
  tickers: any[];
  thumbnail?: string;
  featured: string;
  timeZoneShortName: string;
  timeZoneFullName: string;
  gmtOffSetMilliseconds: string;
  imageSet:string
 }
