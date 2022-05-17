import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edu-exp',
  templateUrl: './edu-exp.component.html',
  styleUrls: ['./edu-exp.component.css']
})
export class EduExpComponent implements OnInit {
  educationList:any;
  experienceList:any;

  constructor(private portfolioService:PortfolioService) {  }

  ngOnInit(): void {
    this.portfolioService.getData().subscribe(data =>{
      this.educationList=data.education;
      this.experienceList=data.experience;
    });
  }

}

