import { Component, OnInit, TemplateRef } from '@angular/core';
import { Link } from '../link';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { LinksService } from '../links.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Subscription } from 'rxjs/Subscription';
import { ILink } from '../intefaces';

@Component({
  selector: 'app-editlink',
  templateUrl: './editlink.component.html',
  styleUrls: ['./editlink.component.css']
})
export class EditlinkComponent implements OnInit {

  public editLinkForm: FormGroup;

  subscription: Subscription;

  public link: object;

  linkId: number;

  constructor(private formBuilder: FormBuilder,
    private linksService: LinksService,
    private router: Router,
    private route: ActivatedRoute) {

      this.route.params.subscribe((params: Params) => {
        this.linkId = parseInt(params['id'], 10);
      });

      this.editLinkForm = new FormGroup({
        id: new FormControl(null),
        url : new FormControl(null , Validators.required),
        title: new FormControl(null, Validators.required),
        isShared: new FormControl(null),
        tags: this.formBuilder.array([])
      });
    }

    ngOnInit(): void {
      this.linksService.getLinkById(this.linkId).subscribe((link) => {
        this.editLinkForm = this.formBuilder.group({
          id: new FormControl(link.id),
          url : new FormControl(link.url , Validators.required),
          title: new FormControl(link.title, Validators.required),
          isShared: new FormControl(link.isShared),
          tags: this.formBuilder.array(link.tags)
        });
      });
    }

    addTag(): void {
      const control = <FormArray>this.editLinkForm.controls['tags'];
      control.push(new FormControl());
    }
    removeTag(index): void {
      const control = <FormArray>this.editLinkForm.controls['tags'];
      control.removeAt(index);
    }

    onUpdateLink(): void {
      if (this.editLinkForm.status === 'VALID') {
        this.subscription = this.linksService.updateLink(this.editLinkForm.value).subscribe((links) => {
          console.log(links);
          this.router.navigate(['/']);
        });
      }
    }
    backToMainPage(): void {
      this.router.navigate(['']);
    }

}
