import {Component} from 'angular2/core';

@Component({
	selector: 'pm-products',
	templateURL: 'app/products/product-list.component.html'
	
})
export class ProductListComponent{
	pageTitle: string = 'Album List';
	imageWidth: number = 50;
	imageMargin: number = 2;
	products: any[] = [
    {
        "productId": 1,
        "Name": "Leaf Rake",
        "Artist": "GDN-0011",
        "Genre": "March 19, 2016",
        "Year": "Leaf rake with 48-inch wooden handle.",
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
   		"Name": "Leaf Rake",
        "Artist": "GDN-0011",
        "Genre": "March 19, 2016",
        "Year": "Leaf rake with 48-inch wooden handle.",
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 5,
      	"Name": "Leaf Rake",
        "Artist": "GDN-0011",
        "Genre": "March 19, 2016",
        "Year": "Leaf rake with 48-inch wooden handle.",
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        "productId": 8,
       	"Name": "Leaf Rake",
        "Artist": "GDN-0011",
        "Genre": "March 19, 2016",
        "Year": "Leaf rake with 48-inch wooden handle.",
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
        "productId": 10,
       	"Name": "Leaf Rake",
        "Artist": "GDN-0011",
        "Genre": "March 19, 2016",
        "Year": "Leaf rake with 48-inch wooden handle.",
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
];
}