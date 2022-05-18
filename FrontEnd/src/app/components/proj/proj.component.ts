import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/_services/portfolio.service';

@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.css']
})
export class ProjComponent implements OnInit {

  myPortfolio: any;
  projectList: any;
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getData().subscribe(data => {
      this.projectList = data.projects;
    });
  }
}
