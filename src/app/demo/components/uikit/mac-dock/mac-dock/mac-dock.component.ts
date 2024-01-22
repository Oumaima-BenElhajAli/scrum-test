import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mac-dock',
  templateUrl: './mac-dock.component.html',
  styleUrl: './mac-dock.component.scss'
})
export class MacDockComponent implements OnInit {
  panels = [
    {
      number:1,
      showPanel:true,
      interface: '/assets/TeamsMeeting.png'
    },
    {
      number:2,
      showPanel:true,
      interface:"/assets/cards.png"
      
    },
    {
      number:3,
      showPanel:true,
      interface: '/assets/sprint backlog.png'
     
    },
    {
      number:4,
      showPanel:true,
      interface: '/assets/Notes.png'
     
    }
  ]
  icons = [
    // {
    //   icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853743597518c528b9b3_contacts.png",
    //   description: "Contacts",
    // },

    {
      icon: "/assets/Teams.png",
      description: "Meeting",
      showSplit: false,
      interface: '/assets/TeamsMeeting.png'
    },
    {
      icon: "/assets/planningPocker.png",
      description: "Planning Pocker",
      showSplit: false,
      interface: '/assets/Notes.png'
    },
    // {
    //   icon: "/assets/unnamed.webp",
    //   description: "FaceTimes",
    // },
    {
      icon: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png",
      description: "Notes",
      showSplit: false,
      interface: '/assets/Notes.png'
    },
    {
      icon: "/assets/jira.png",
      description: "Jira",
      showSplit: false,
      interface: '/assets/sprint backlog.png'
    },
    // {
    //   icon: "https://phanphoibanquyen.com/wp-content/uploads/2023/10/teams_00.png",
    //   description: "Teams",
    // },
  ];
  ngOnInit(): void {
    // this.insertIcons();
  }
  // insertIcons(): void {
  //   const parent = document.getElementById('parent');

  //   if (parent) {
  //     this.Icons.forEach((index) => {
  //       parent.innerHTML += `
  //         <div class="icon">
  //           <div class="descripcion"><div>${index.description}</div></div>
  //           <img class="icon_img" src=${index.icon} alt=""/>
  //         </div>
  //       `;
  //     });
  //   }
  // }

}
