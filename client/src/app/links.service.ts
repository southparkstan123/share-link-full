import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ILink } from '../app/intefaces';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LinksService {

  private numOfSharedLink: number;
  private numOfFavouritedLink: number;

  private numOfSharedLinkSubject: BehaviorSubject<number>;
  private numOfFavouritedLinkSubject: BehaviorSubject<number>;

  private linksSubject: BehaviorSubject<any>;

  constructor (private http: HttpClient) {
    this.getLinks().subscribe((links) => {
      this.numOfSharedLink = parseInt(links.length, 10);
      this.numOfFavouritedLink = parseInt(links.filter(link => link.isShared === true).length, 10);
    });
    this.numOfSharedLinkSubject = new BehaviorSubject<number>(this.numOfSharedLink);
    this.numOfFavouritedLinkSubject = new BehaviorSubject<number>(this.numOfFavouritedLink);
  }

  getSharedLinkObservable() {
    return this.numOfSharedLinkSubject.asObservable();
  }

  getFavouritedLinkObservable() {
    return this.numOfFavouritedLinkSubject.asObservable();
  }

  getLinks() {
    return this.http.get('api/v1/links')
      .map((res: any) => {
        this.numOfSharedLink = parseInt(res.filter(link => link.isShared === true).length, 10);
        this.numOfFavouritedLink = parseInt(res.length, 10);
        this.numOfSharedLinkSubject.next(this.numOfSharedLink);
        this.numOfFavouritedLinkSubject.next(this.numOfFavouritedLink);
        return res;
      });
  }

  addLink(link: ILink) {
    return this.http.post('api/v1/addlink', link)
      .map((res: any) => {
          return res;
        }
      );
  }

  updateLink(link: ILink) {
    return this.http.put('api/v1/link/update/' + link.id, link)
      .map((res: any) => {
          return res;
        }
      );
  }

  deleteLink(linkIdToBeDeleted: number) {
    return this.http.delete('api/v1/link/delete/' + linkIdToBeDeleted)
    .map((res: any) => {
      this.numOfSharedLink = parseInt(res.filter(link => link.isShared === true).length, 10);
      this.numOfFavouritedLink = parseInt(res.length, 10);

      this.numOfSharedLinkSubject.next(this.numOfSharedLink);
      this.numOfFavouritedLinkSubject.next(this.numOfFavouritedLink);
      return res;
    });
  }

  getLinkById(linkIdToBeGet: number) {
    return this.http.get('api/v1/link/' + linkIdToBeGet)
    .map((res: ILink) => {
      return res;
    });
  }
}
