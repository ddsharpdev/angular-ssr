import {
  Component,
  OnInit,
  TransferState,
  inject,
  makeStateKey,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import { DeferredAComponent } from './deferred-a/deferred-a.component';
import { DeferredBComponent } from './deferred-b/deferred-b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DeferredAComponent, DeferredBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);
  private transferState = inject(TransferState);
  title = 'sharpdev-learn-ssr';
  i = 0;
  todoDelay: any;
  todoTimeout: any;
  STATE_KEY = makeStateKey<number>('test');

  ngOnInit(): void {
    console.log('ngOnInit is generated in both the server and the browser.');
    // this.sendRequestWithDelay();
    // this.sendRequestWithTimeout();
  }

  constructor() {
    console.log('constructor is generated in both the server and the browser.');
    // this.transferState.set(this.STATE_KEY, 10);
  }

  buttonClick() {
    console.log('Output is generated only in browser not in server.');
    this.i++;
  }

  sendRequestWithDelay() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(delay(5000))
      .subscribe((todo) => {
        this.todoDelay = todo;
      });
  }

  sendRequestWithTimeout() {
    setTimeout(() => {
      this.http
        .get('https://jsonplaceholder.typicode.com/todos/2')
        .subscribe((todo) => {
          this.todoTimeout = todo;
        });
    }, 5000);
  }
}
