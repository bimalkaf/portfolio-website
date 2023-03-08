import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit{

  myData : string[][] =[
    ['Name','Bimal Kafle'],
    ['DoB','11/05/1997'],
    ['Work experience','2 years'],
    ['Education','MCA (2020)'],
    ['Interests','Travel'],
  ];

  aboutMe : string[]=[
    'Hi, I am a Fullstack software developer with 2 years of experience in software industry',
    'Worked as Senior Developer in Capgemini with Java Spring boot as Backend and Flutter as frontend framework',
    'Delivered all the tasks within timelines. Always eager to learn new technologies',
    'Currently working as Senior Analyst in Capgemini'
  ]

  ngOnInit(): void {
 
  }

}
