import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  allContent: any;

  constructor() { }

  ngOnInit(): void {
    this.allContent = {
      details: {
        name: 'João Teodoro de Oliveira Neto',
        jobTitle: 'Software Developer',
        phone: '+5534992316267',
        email: 'joaoneto.itba@gmail.com',
      },
      links: [
        {
          url: 'https://github.com/joaoteodoro',
          name: 'Github'
        },
        {
          url: 'https://linkedin.com.br',
          name: 'Linkedin'
        }
      ],
      skills: [
        {
          name: 'Java',
          level: 4,
        },
        {
          name: 'Spring Framework',
          level: 4,
        },
        {
          name: 'Javascript',
          level: 4,
        },
        {
          name: 'HTML',
          level: 4,
        },
        {
          name: 'CSS',
          level: 4,
        },
        {
          name: 'Angular',
          level: 4,
        },
        {
          name: 'Git',
          level: 4,
        },
        {
          name: 'Node.js',
          level: 3,
        },
        {
          name: 'React',
          level: 3,
        },
        {
          name: 'SQL',
          level: 3,
        },
        {
          name: 'AWS',
          level: 2,
        },
      ],
      profile: {
        description: "6 years experience in programming with knowledge of Java and Javascript. Graduated in Information Systems at the Federal University of Uberlândia. I also have knowledge in SQL and Node JS. I'm currently working as a fullstack developer, using Angular tools for frontend and Java for backend. I have intermediate English.",
      },
      employments: [
        {
          title: 'Trainee',
          employer: 'Powerlogic',
          startDate: 'Jun 2015',
          endDate: 'Sep 2015',
          city: 'Uberlândia',
          description: 'Support in the development and maintenance of systems for the town hall of Uberlândia, using the java programming language and oracle database.'
        },
        {
          title: 'Junior Developer',
          employer: 'Ibrowse Consultoria e Informática',
          startDate: 'Oct 2015',
          endDate: 'Jan 2016',
          city: 'Uberlândia',
          description: 'Support in the development and maintenance of systems for the town hall of Uberlândia, using the java programming language and oracle database.'
        },
        {
          title: 'Junior Developer',
          employer: 'everis',
          startDate: 'Feb 2016',
          endDate: 'Aug 2016',
          city: 'Uberlândia',
          description: 'Analysis, development and maintenance of systems using Java, HTML, CSS and JavaScript technologies.'
        },
        {
          title: 'Developer',
          employer: 'Ibrowse Consultoria e Informática',
          startDate: 'Sep 2016',
          endDate: 'Jan 2018',
          city: 'Uberlândia',
          description: 'Analysis, development and maintenance of systems using Java, Angular and Oracle Database technologies.'
        },
        {
          title: 'Senior Developer',
          employer: 'eNe Soluções',
          startDate: 'Jan 2018',
          endDate: 'May 2020',
          city: 'Uberlândia',
          description: 'Analysis, development and maintenance of systems using Java, Angular, Node, React technologies. Database MySQL and PostgreSQL.'
        },
        {
          title: 'Specialist Developer',
          employer: 'everis',
          startDate: 'May 2020',
          endDate: '',
          city: 'Uberlândia',
          description: 'Analysis, development and maintenance of systems using Java and Angular technologies. Structuring new projects and supporting other developers.'
        },
      ],
      education: [
        {
          title: 'System Analisys',
          employer: 'Universidade Federal de Uberlândia',
          startDate: 'Mar 2012',
          endDate: 'Feb 2017',
          city: 'Uberlândia',
          description: ''
        },
      ]
    }
  }

}
