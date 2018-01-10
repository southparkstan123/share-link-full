import { Component, OnInit, TemplateRef } from '@angular/core';
import { Link } from '../link';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { LinksService } from '../links.service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-addlink',
  templateUrl: './addlink.component.html',
  styleUrls: ['./addlink.component.css']
})
export class AddlinkComponent implements OnInit {

  public linkForm: FormGroup;

  subscription: Subscription;

  constructor(private formBuilder: FormBuilder,
    private linksService: LinksService,
    private router: Router) {
    this.linkForm = this.formBuilder.group({
      url : new FormControl(null , Validators.required),
      title: new FormControl(null, Validators.required),
      isShared: new FormControl(false),
      tags: this.formBuilder.array([
        new FormControl()
      ])
    });
  }
  ngOnInit(): void {
  }

  addTag(): void {
    const control = <FormArray>this.linkForm.controls['tags'];
    control.push(new FormControl());
  }

  removeTag(index): void {
    const control = <FormArray>this.linkForm.controls['tags'];
    control.removeAt(index);
  }
  onAddLink(): void {
    if (this.linkForm.status === 'VALID') {
      this.subscription = this.linksService.addLink(this.linkForm.value).subscribe((links) => {
        console.log(links);
        this.router.navigate(['/']);
      });
    }
  }

  backToMainPage(): void {
    this.router.navigate(['']);
  }
}
