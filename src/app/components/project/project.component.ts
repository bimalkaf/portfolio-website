import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: ProjectModel[] = [
    {
      title: "Nepal Licence Exam app",
      technologies: 'Android, Kotlin, Dagger Hilt, MVVM',
      description: [
        'Created from scratch',
        'Uploaded it to playstore ',
        '1K+ downloads'
      ]

    },
    {
      title: "B Notes",
      technologies: 'Android, Java, XML',
      description: [
        'Created from scratch',
        'Uploaded it to playstore ',
        '100+ downloads'
      ]

    }, {
      title: "QR Code Generator",
      technologies: 'Android, Flutter, Dart',
      description: [
        'Created from scratch',
        'Available on Google playstore ',
        'Useful app'
      ]

    }
  ]

  ngOnInit(): void {

  }

}
