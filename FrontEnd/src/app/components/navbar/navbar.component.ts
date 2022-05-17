import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/_services/portfolio.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myPortfolio:any;

  constructor( ) { }

  ngOnInit(): void {
   
  }

}
