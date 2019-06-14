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
    let zillowCloneLinkOffset = this.zillowCloneLink.nativeElement.offsetTop/2;
    setTimeout(() => {
      this.nasaProjectLink.nativeElement.classList.remove("hidden");
    }, 500);

    window.addEventListener('scroll',()=>{
      if(window.pageYOffset > zillowCloneLinkOffset && this.zillowCloneLink.nativeElement.className === 'hidden'){
        this.zillowCloneLink.nativeElement.classList.remove("hidden");
      }
    });
  }
}
