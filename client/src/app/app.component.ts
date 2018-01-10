import { Component } from '@angular/core';
import { Link } from './link';
import { Observable } from 'rxjs/Observable';
import { LinksService } from './links.service';
import { ILink, ITag } from '../app/intefaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LinksService],
})
export class AppComponent {

  constructor(private _linksService: LinksService, private router: Router) {
  }

  toAddLinkPage() {
    this.router.navigate(['/addlink']);
  }

}
