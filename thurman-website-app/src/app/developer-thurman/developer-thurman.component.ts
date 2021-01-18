import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-thurman',
  templateUrl: './developer-thurman.component.html',
  styleUrls: ['./developer-thurman.component.scss']
})
export class DeveloperThurmanComponent implements OnInit {

  developerSections= [
    {
      sectionHeader: 'Areas of Expertise',
      sectionTexts: [
          'Application Development & SDLC',
          'Developer Lead, Mentor, Coach',
          'Enterprise Architecture & Design Patterns',
          'Clear Effective Communication',
          'Project Management & Priority Setting',
      ]
    },
    {
      sectionHeader: 'Recent Projects',
      sectionTexts: [
          'Migration of ESB Monolithic Application to Microservice Architecture',
          'Full Stack Delivery of Modernized <a class="text-dark" href="https://cignaforbrokers.com">Cigna&reg; Broker Portal</a>',
          'Implementation of Numerous Client Initiatives',
          'Frontend Domain and Workflow Management & Reporting Application',
          '<a href="https://github.com/thurman-justice/thurman-website" class="text-dark">This Website!</a>'
      ]
    },
    {
      sectionHeader: 'Technical Competencies',
      sectionTexts: [
          'Languages & Frameworks: Java / Node / Python / Spring / Spring Boot',
          'Frontend: Angular / React / Material / Bootstrap / HTML / CSS / JS / JQUERY',
          'Databases: Oracle SQL / Postgres SQL / MongoDB / DynamoDB'
      ]
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
