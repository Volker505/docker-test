import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'frontend';

  public user = '';

  constructor(private readonly httpClient: HttpClient) {
  }

  public onClick() {
    this.httpClient.get('http://localhost:3000/user', {responseType: 'text'})
      .subscribe(data => {
        this.user = data as string;
      });
  }
}
