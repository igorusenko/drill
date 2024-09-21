import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private videoLoadedSubject = new BehaviorSubject<boolean>(false);

  // Observable для подписки на состояние загрузки видео
  videoLoaded$ = this.videoLoadedSubject.asObservable();

  // Метод для уведомления о загрузке видео
  notifyVideoLoaded() {
    this.videoLoadedSubject.next(true);
  }

}
