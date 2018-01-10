import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ILink, ITag } from '../intefaces';
import { LinksService } from '../links.service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})

export class LinksComponent implements OnInit {
  @Input() keyword: string;
  @Output() linkIdToBeDeleted = new EventEmitter<{id: string}>();

  subscription: Subscription;
  links: Observable<Array<object>>;

  constructor(private linksService: LinksService, private router: Router) {
  }

  ngOnInit() {
    this.links = this.linksService.getLinks();
  }

  onSearchKeyword(keyword: string): void {
    this.keyword = keyword;
  }

  onDeleteLink(id: number): void {
    console.log(id);
    const r = confirm('Are you sure to delete this link?');
    if (r === true) {
      this.links = this.linksService.deleteLink(id);
    }
  }

  onVisitLink(url): void {
    window.open(url, '_blank');
  }

  onEditLink(link): void {
    this.router.navigate(['/editlink', link.id]);
  }

}

