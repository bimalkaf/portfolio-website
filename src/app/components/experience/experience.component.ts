import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from 'src/app/models/model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  expList: ExperienceModel[] = [

    {
      role: "Backend Developer",
      company: "Capgemini",
      duration: "Apr 2021 - Present",
      description: [
        'Created 10+ microservices in Java using Spring Boot',
        'Implemented major features like Payload Encryption using AES algorithm, My Wallet API,QR Code Scanner API.',
        ' Flexible in Database for immediate modification or implementations.',
        'Studying and following OCPP protocols while writing services.',
        'Resolving bugs and defects and tracking them using tools like JIRA.',
        'Worked on all the Jira’s that have been assigned to me before the sprint as per the given deadline.',
        'Assisting team members in writing efficient code in Java Spring Boot and supervising them to follow best coding practices'
      ]
    }, {
      role: "Flutter Developer",
      company: "Capgemini",
      duration: "Apr 2021 - Present",
      description: [
        'Created an mobile application using Flutter.',
        'Implemented REST APIs with the Mobile Application.',
        'Implemented End-to-End Encryption using AES in the app.',
        'Implemented major features like QR code, MyWallet ,Payment Gateway integration with Stripe',
        'Designed widgets for Mobile applications in Flutter.',
        'Involved with User Story Discussions and provided Technical Solutions for the same'
      ]
    }, {
      role: "Android Developer Intern",
      company: "InTouchApp",
      duration: "Jan 2020 - July 2020",
      description: [
        'Added usable feature in the app with 1 millions+ download',
        'Improve the existing features to the applications',
        'UI/UX improvements',
        'Bug fixes and performance improvements'
      ]
    }
  ]

  ngOnInit(): void {

  }

}
