import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  // homeImages= [{
  //   "images": 
  // }]

  images = [
    {"img": "../../../assets/img/home/hero-slider/01.jpg", "myStyles": {"background-color": "rgb(58, 175, 210)"}},
    {"img": "../../../assets/img/home/hero-slider/02.jpg", "myStyles": {"background-color": "#f5b1b0"}},
    {"img": "../../../assets/img/home/hero-slider/03.jpg", "myStyles": {"background-color": "#eba170"}}
  ]

  foods = [
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "chicken" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" },
    { "images": "1234", "name": "Noodles" }
  ]

  foodlimit;

  foodlimit1=[];
  women_prio_1 = [
    { "img": "../../../assets/img/shop/catalog/01.jpg", "catagory": "shoes", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/02.jpg", "catagory": "dress", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/03.jpg", "catagory": "shorts", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/04.jpg", "catagory": "sweater", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/05.jpg", "catagory": "shorts", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/06.jpg", "catagory": "sweater", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/26.jpg", "catagory": "sweater", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/52.jpg", "catagory": "sweater", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/54.jpg", "catagory": "sweater", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/56.jpg", "catagory": "sweater", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/31.jpg", "catagory": "sweater", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/15.jpg", "catagory": "sweater", "name": "colorbar Skniker" },
  ]
  men_prio_1 = [
    { "img": "../../../assets/img/shop/catalog/12.jpg", "catagory": "shoes", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/13.jpg", "catagory": "dress", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/14.jpg", "catagory": "dress", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/33.jpg", "catagory": "shorts", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/16.jpg", "catagory": "sweater", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/17.jpg", "catagory": "shoes", "name": "colorbar Skniker" },
  ]
  men_prio_2 = [
    { "img": "../../../assets/img/shop/catalog/18.jpg", "catagory": "shoes", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/19.jpg", "catagory": "dress", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/25.jpg", "catagory": "dress", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/33.jpg", "catagory": "shorts", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/22.jpg", "catagory": "sweater", "name": "colorbar Skniker" },
    { "img": "../../../assets/img/shop/catalog/22.jpg", "catagory": "sweater", "name": "colorbar Skniker" },
  ]

  men_prio=[ this.men_prio_1,this.men_prio_2]

  constructor() { }

  ngOnInit(): void {

  }

}
