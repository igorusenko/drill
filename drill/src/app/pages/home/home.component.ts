import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewChecked {
  isViewLogo: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.isViewLogo = true;
    }, 2000)
  }

  redirectToTelegram(): void {
    window.location.href = 'https://t.me/detkiprod';
  }

  ngAfterViewChecked() {
    const video = document.querySelector('video');
    if (video) {
      video.muted = true;
      video.play();
    }
  }


}
