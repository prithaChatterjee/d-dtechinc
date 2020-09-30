import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  changeText=false;

  navs=["Saree",'Kurti', 'Dress', 'Jewellery','Cosmatics']

  constructor() { }

  ngOnInit(): void {
  }

}
