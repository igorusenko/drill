import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewChecked {
  isVideoLoaded: boolean;
  videoSrc: string;

  constructor(private videoLoaderService: LoaderService) {
    this.videoSrc = `assets/video/logo.mp4`;
  }

  ngOnInit() {
    this.videoLoaderService.videoLoaded$.subscribe(isLoaded => {
      this.isVideoLoaded = isLoaded;
    })
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

  onVideoLoaded() {
    this.videoLoaderService.notifyVideoLoaded();
  }

}
