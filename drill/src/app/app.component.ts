import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./layouts/footer/footer.component";
import {HeaderComponent} from "./layouts/header/header.component";
import {slideInDownAnimation} from "./animations/side-down";
import {NgClass, NgIf, NgStyle, NgTemplateOutlet} from "@angular/common";
import {slideInUpAnimation} from "./animations/side-up";
import {Title} from "@angular/platform-browser";
import {LoaderService} from "./services/loader.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, NgIf, NgClass, NgStyle, NgTemplateOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInDownAnimation, slideInUpAnimation],
})
export class AppComponent implements OnInit{
  title = 'Detki Production';

  isVideoLoaded: boolean;

  constructor(private titleService: Title, private videoLoaderService: LoaderService) {
    titleService.setTitle(this.title)
  }

  ngOnInit() {
    this.videoLoaderService.videoLoaded$.subscribe(isLoaded => {
      this.isVideoLoaded = isLoaded;
    })
  }
}
