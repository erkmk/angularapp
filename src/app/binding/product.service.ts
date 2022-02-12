import { Injectable } from '@angular/core';

interface IProducts{
    ProductId:number,
    ArtNo:string,
    Provider: string,
    ProviderArtNo: string,
    Brand: string,
    Price:number,
    BuyAccount: string,
    SalesAccount: string
}
@Injectable({providedIn:'root'})
export class ProductsService {

   products: IProducts[] =[];

    getAllProductsUsingTrackBy() {
   
        return this.products = [
  
      {
           
        ProductId: 1,
            
        ArtNo: "100",
           
        Provider: "OppoProvider",
               
        ProviderArtNo: "1Yu",
               
        Brand: "Oppo",
              
        Price: 7810.23,
                
        BuyAccount: "123",
             
        SalesAccount: "321"  

            },
            
      {
                
        ProductId: 1,
          
        ArtNo: "101",
                
        Provider: "OppoProvider",
               
        ProviderArtNo: "1Yu",
          
        Brand: "Oppo",
              
        Price: 2310.23,
                
        BuyAccount: "123",
               
        SalesAccount: "321"  

            },
          
      {
               
        ProductId: 1,
               
        ArtNo: "102",
               
        Provider: "OppoProvider",
                
        ProviderArtNo: "1Yu",
            
        Brand: "Oppo",
               
        Price: 7810.23,
            
        BuyAccount: "123",
            
        SalesAccount: "321"  

            },
            
      {
              
        ProductId: 1,
                
        ArtNo: "103",
                
        Provider: "OppoProvider",
                
        ProviderArtNo: "1Yu",
                
        Brand: "Oppo",
                
        Price: 5810.23,
             
        BuyAccount: "123",
               
        SalesAccount: "321"  

            }  

        ];
        
    }


   
    getAllProductsUsingTrackByExample() {
     
        return this.products = [
         
      {
                
        ProductId: 1,
                
        ArtNo: "100",
            
        Provider: "OppoProvider",
               
        ProviderArtNo: "1Yu",
            
        Brand: "Oppo",
           
        Price: 7810.23,
               
        BuyAccount: "123",
                
        SalesAccount: "321"  

            },
       
      {
              
        ProductId: 1,
           
        ArtNo: "101",
               
        Provider: "OppoProvider",
               
        ProviderArtNo: "1Yu",

        Brand: "Oppo",
               
        Price: 2310.23,
             
        BuyAccount: "123",
                
        SalesAccount: "321"  

            },
            
      {
                
        ProductId: 1,
                
        ArtNo: "102",
                
        Provider: "OppoProvider",
              
        ProviderArtNo: "1Yu",
            
        Brand: "Oppo",
               
        Price: 7810.23,
                
        BuyAccount: "123",
                
        SalesAccount: "321"  

            },
            
      {
             
        ProductId: 1,
               
        ArtNo: "103",
                
        Provider: "OppoProvider",
               
        ProviderArtNo: "1Yu",
                
        Brand: "Oppo",
                
        Price: 5810.23,
                
        BuyAccount: "123",
                
        SalesAccount: "321"  

            },
            
      {
            
        ProductId: 1,
                
        ArtNo: "104",
               
        Provider: "OppoProvider",
                
        ProviderArtNo: "1Yu",
                
        Brand: "Oppo",
                
        Price: 4770.23,
               
        BuyAccount: "143",
        
        SalesAccount: "211"  

            },
           
        ];
        
    }
 

}