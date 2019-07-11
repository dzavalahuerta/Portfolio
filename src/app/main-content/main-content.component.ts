import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.sass']
})
export class MainContentComponent implements OnInit {
  @ViewChild('nasaProjectLink') nasaProjectLink;
  @ViewChild('zillowCloneLink') zillowCloneLink;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.nasaProjectLink.nativeElement.classList.remove("hidden");
    }, 500);

    let zillowCloneLinkOffset = this.zillowCloneLink.nativeElement.offsetTop/2;
    window.addEventListener('scroll',()=>{
      if(window.pageYOffset > zillowCloneLinkOffset
        && this.zillowCloneLink.nativeElement.className === 'hidden project'){
        this.zillowCloneLink.nativeElement.classList.remove("hidden");
      }
    });

    let allProjects = document.querySelectorAll('a[class="hidden project"]');
    for (let i = 0; i < allProjects.length; i++) {
      let projectInfoDiv = allProjects[i].firstElementChild;

      let projectInfoDivChildren: any = projectInfoDiv.children;

      projectInfoDiv.addEventListener('touchstart',()=>{
        for (let index = 0; index < projectInfoDivChildren.length; index++) {
          if(projectInfoDivChildren[index] === projectInfoDivChildren[0]){
            projectInfoDivChildren[index].style.transform = 'scale(1.04)';
            projectInfoDivChildren[index].style.transitionDuration = '1000ms';
          }
          else{
            projectInfoDivChildren[index].style.display = 'unset';
          }
        }
      });
      
      projectInfoDiv.addEventListener('touchend',()=>{
        for (let index = 0; index < projectInfoDivChildren.length; index++) {
          if(projectInfoDivChildren[index] === projectInfoDivChildren[0]){
            projectInfoDivChildren[index].style.transform = '';
            projectInfoDivChildren[index].style.transitionDuration = '';
          }
          else{
            projectInfoDivChildren[index].style.display = 'none';
          }
        }
      });
    }
  }
}
