import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PostService } from '../services/post.service';
@Component({
  moduleId: module.id,
  selector: 'contactUs-cmp',
  templateUrl: 'contactUs.html'
})
export class contactUsComponent implements OnInit, OnDestroy { 
  name = 'contactUsComponent'; 
 frmContact: FormGroup;
  private _sub: any;
  
  res: any;
  
  constructor(private fb: FormBuilder, private postService: PostService) {}
  
  ngOnInit() {
    this.frmContact = this.fb.group({
      name: ['', Validators.required],
      content: ['', Validators.required]
    });
  }
  
  onSubmit() {
    let formValue = this.frmContact.value;
    // cool stuff to transform form value
    
    // call AJAX
    this._sub = this.postService.saveContact(formValue)
      .subscribe(data => {
        console.log(data)
        this.res = data;
      });
  }
  
  ngOnDestroy() {
    // clean subscription when component destroy
    if (this._sub) {
      this._sub.unsubscribe();
    }
  }
}