export interface Category{
  id:string;
  name:string;
  photo:string;
  description:string;
  _links:{
    self:{
      href:string;
    },
    category:{
      href:string
    },
    products:{
      href:string;
    }
  }
}
