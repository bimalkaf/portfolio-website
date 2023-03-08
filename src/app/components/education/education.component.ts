import { Component, OnInit } from '@angular/core';
import { EducationModel } from 'src/app/models/model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{

  educationList : EducationModel[] =[
    {
      institute:"Tilak Maharashtra Vidyapeeth",
      course:"Master of Computer Application",
      duration:"2018-2020",
      score:"9.36 CGPA",
    },
    {
      institute:"Tilak Maharashtra Vidyapeeth",
      course:"Bachelor of Computer Application",
      duration:"2015-2018",
      score:"8.32 CGPA",
    }
  ]

  ngOnInit(): void {
  }

}
