import { Component } from '@angular/core';

@Component({
  selector: 'app-developer-thurman',
  standalone: false,
  templateUrl: './developer-thurman.component.html',
  styleUrls: ['./developer-thurman.component.scss']
})
export class DeveloperThurmanComponent {

  developerSections= [
    {
      cards: false,
      sectionHeader: 'About Me',
      sectionTexts: [
          "I'm a Senior Engineering Manager with 12+ years driving platform modernization at Cigna Healthcare. I spend my days orchestrating engineering teams, designing event-driven cloud-native architecture on AWS, and translating complex technical problems into funded, executable roadmaps.",
          "I care about building systems that are reliable, observable, and maintainable — and teams that are the same.",
          '<a href="https://thurmanjustice.com/about">About</a>'
      ]
    },
    {
      cards: false,
      sectionHeader: 'Areas of Expertise',
      sectionTexts: [
          'Engineering Org Design & Team Leadership',
          'Event-Driven Microservices & Cloud-Native Architecture',
          'Cross-Functional Program Delivery',
          'Platform Modernization & Legacy Migration',
          'PCI-DSS Compliance & Regulated System Design',
          'Technology Investment Strategy',
          'CI/CD & Developer Enablement',
          'Talent Development & Early Career Mentorship'
      ]
    },
    {
      cards: false,
      sectionHeader: 'Technical Competencies',
      sectionTexts: [
          '<strong>Cloud & Architecture</strong> AWS · Terraform · Kafka · Event-driven design Microservices · Domain-driven design · PCI-DSS · CI/CD · REST APIs',
          '<strong>Languages & Frameworks</strong> Java · Spring Boot · Python · Node.js · Angular',
          '<strong>Data</strong> DynamoDB · MongoDB · Oracle SQL · PostgreSQL · Elastic Search',
          '<strong>Practices</strong> SAFe / Agile · DevOps · Test & Business Driven Development · Configuration-as-Code'
      ]
    },
    {
      cards: true,
      sectionHeader: 'Featured Projects',
      cardContents: [
          {
            title : "Enterprise MDM Customer Sync",
            nibs : ["AWS", "Kafka", "Event-Driven", "Java", "Spring Boot"],
            body : "Designed and led implementation of an enterprise customer synchronization pipeline replacing a legacy batch workflow that required constant manual intervention. Moved from 24-hour batch processing to near real-time, self-healing event delivery — processing 1–2M records per month across dozens of downstream consumers including customer portals, mobile, call centers, and finance."
          },
          {
            title : "Three-Tier Broker Contract Hierarchy",
            nibs : ["AWS", "Kafka", "Spring Boot", "Mongo", "Oracle SQL", "Angular"],
            body : "Architecting a structural extension to Cigna's broker contract model — introducing General Agencies and SubFirm tiers without sacrificing the performance of existing two-tier reporting and workflows. Enables direct commission payouts to writing agents and simplifies broker engagement across 2 General Agencies, 30–40 SubFirms, and thousands of writing agents. Currently in phased rollout."
          },
          {
            title : "Legacy-to-Microservices Platform Migration",
            nibs : ["AWS", "Kafka", "Spring Boot", "Python", "Node", "Oracle SQL", "DevOps", "CI/CD"],
            body : "Orchestrated a 6-team cross-functional migration from a legacy monolithic platform to an event-driven microservices architecture on AWS — spanning Architecture, DevOps, Cloud, QA, Product, and Release Management. Improved deployment frequency from monthly releases to on-demand delivery, reduced policy installation latency by 10%, and improved system reliability from 99.5% to 99.9%."
          },
          {
            title : "PCI-DSS 4.0 Broker-Assisted Payment Platform",
            nibs : ["AWS", "PCI-DSS", "Spring Boot", "Node", "Angular", "REST"],
            body : "Led implementation of a compliance-grade broker-assisted payment platform serving customers who need guided support to complete binder and one-time payments. Architected with vendor tokenization to scope cardholder data out of the system boundary entirely, maintaining a fully auditable event-driven transmission pipeline. Includes PCI-DSS 4.0 uplift with MFA and strengthened credential controls."
          },
          {
            title : "Salesforce Member & Policy Data Integration",
            nibs : ["Salesforce", "AWS", "Java", "Spring Boot", "ETL"],
            body : "Leading a data integration initiative migrating approximately 3M member records and 15–20M policy records into a Salesforce instance to improve broker relations and call center outcomes. Owning the internal integration boundary and enterprise data handoff in partnership with a consulting group handling Salesforce-side ingest and reporting. Expected to increase call center effectiveness 5x by surfacing previously inaccessible information at point of service."
          }
      ]
    }
  ];
}
