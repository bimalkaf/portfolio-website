import { Component, OnInit } from '@angular/core';
import { SkillModel } from 'src/app/models/model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : SkillModel[] = [
    {
      name:"Java",
      level:"Expert",
      rating:85,
    },
    {
      name:"Spring Boot",
      level:"Expert",
      rating:75,
    },
    {
      name:"Flutter",
      level:"Expert",
      rating:80,
    }
  ]

  ngOnInit(): void {
   
  }

}
