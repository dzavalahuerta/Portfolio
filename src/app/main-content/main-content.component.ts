import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @ViewChild('nasaProjectLink') nasaProjectLink;

  constructor() { }

  ngOnInit() {
    let nasaProjectLinkOffset = this.nasaProjectLink.nativeElement.offsetTop/12;
    let document = window.document;

    document.addEventListener('scroll',()=>{
      if(window.pageYOffset > nasaProjectLinkOffset && this.nasaProjectLink.nativeElement.className === 'hidden'){
        console.log('it worked');
        this.nasaProjectLink.nativeElement.classList.remove("hidden");
      }
    });
  }
}
