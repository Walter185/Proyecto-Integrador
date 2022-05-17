import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myPortfolio:any;

  constructor(private portfolioService:PortfolioService ) { }

  ngOnInit(): void {
    this.portfolioService.getData().subscribe(data => {
      this.myPortfolio=data;
    });
  }

}
