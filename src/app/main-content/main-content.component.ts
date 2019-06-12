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
    let nasaProjectLinkOffset = this.nasaProjectLink.nativeElement.offsetTop/12;
    let zillowCloneLinkOffset = this.zillowCloneLink.nativeElement.offsetTop/2;

    window.addEventListener('scroll',()=>{
      console.log(window.pageYOffset);
      if(window.pageYOffset > nasaProjectLinkOffset && this.nasaProjectLink.nativeElement.className === 'hidden'){
        this.nasaProjectLink.nativeElement.classList.remove("hidden");
      }
      if(window.pageYOffset > zillowCloneLinkOffset && this.zillowCloneLink.nativeElement.className === 'hidden'){
        this.zillowCloneLink.nativeElement.classList.remove("hidden");
      }
    });
    console.log(this.zillowCloneLink);
    console.log(zillowCloneLinkOffset);
  }
}
