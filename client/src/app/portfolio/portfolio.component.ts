import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { ILink, ITag } from '../intefaces';
import { Subscription } from 'rxjs/Subscription';
import { LinksService } from '../links.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  private numOfFavouritedLinkObservable: Observable<number>;
  private numOfSharedLinkObservable: Observable<number>;
  private links: Observable<Array<object>>;

  private numberOfLinks: number;
  private sharedLinks: number;
  subscription: Subscription;
  username = 'Minami Kotaro';

  constructor(private linksService: LinksService) {
    this.linksService.getFavouritedLinkObservable().subscribe((num) => {
      this.numberOfLinks = num;
    });
    this.linksService.getSharedLinkObservable().subscribe(num => {
      this.sharedLinks = num;
    });
  }

  ngOnInit() {
  }

}
