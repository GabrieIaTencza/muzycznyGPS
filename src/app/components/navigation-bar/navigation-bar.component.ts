import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeFont(element: any){
    element.setAttribute("style",element.getAttribute("style")+";font-size: 30px; line-height: 34px;");
    for(var i=0; i < element.children.length; i++){
        this.changeFont(element.children[i]);
    }
}

changeFont2(element: any){
  element.setAttribute("style",element.getAttribute("style")+";font-size: 20px; line-height: 24px;");
  for(var i=0; i < element.children.length; i++){
      this.changeFont2(element.children[i]);
  }
}

changeSize1() {
  this.changeFont(document.getElementsByTagName("body")[0]);
}

changeSize2() {
  this.changeFont2(document.getElementsByTagName("body")[0]);
}

changeColors2(element: any){
  element.setAttribute("style",element.getAttribute("style")+"; background-color: black; color: yellow !important; ");
  for(var i=0; i < element.children.length; i++){
      this.changeColors2(element.children[i]);
  }

}


changeColors3(element: any){

  element.setAttribute("style",element.getAttribute("style")+"; background-color: black; color: yellow");
  for(var i=0; i < element.children.length; i++){
      this.changeColors2(element.children[i]);
  }
}

changeColors() {
  this.change.emit();
  this.changeColors2(document.getElementsByTagName("html")[0]);
  this.changeColors3(document.getElementsByClassName(".xd")[0]);
}

}
