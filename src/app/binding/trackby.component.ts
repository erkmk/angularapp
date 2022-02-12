import { Component, OnInit } from '@angular/core';
import { ProductsService } from './product.service';

@Component({
    selector: 'app-trackby',
    templateUrl: './trackby.component.html'
})
export class TrackbyComponent implements OnInit {

    companyProduct: any[] = []

    SampleMessage = "Example of Angular Fetching records using TrackBy";
    constructor(private productService: ProductsService) {
    }

    ngOnInit() {
        this.companyProduct = this.productService.getAllProductsUsingTrackBy();
    }
    getNewCompanies(): void {
        this.companyProduct =
            this.productService.getAllProductsUsingTrackByExample();
    }

    trackByArtNo(index: number, companyProduct: any): string {
        return companyProduct.ArtNo;

    }
}