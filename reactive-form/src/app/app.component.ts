import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { usernameValidator } from './shared/usernameValidator';
import { passwordvalidator } from './shared/passwordvalidator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm: FormGroup;

  onSubmit() {
    console.log(this.registrationForm.value);
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['Ajeet',
        [Validators.required, Validators.minLength(3), usernameValidator]
      ],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        pincode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, { validator: passwordvalidator });



    this.registrationForm.get("subscribe").valueChanges.subscribe(changedvalue => {
      const email = this.registrationForm.get('email');
      if (changedvalue) {
        email.setValidators(Validators.required);
      }
      else {
        email.clearValidators();
      }
      email.updateValueAndValidity();
    })

  }

  constructor(private fb: FormBuilder) { }

  get userName() {
    return this.registrationForm.get('userName');
  }
  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Ajeet'),
  //   password: new FormControl('ajeet123'),
  //   confirmPassword: new FormControl('ajeet123'),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     pincode: new FormControl('')
  //   })
  // });

  

  loadApi() {
    console.log("hi");
    // this.registrationForm.patchValue({
    //   userName: 'aman',
    //   password: 'test',
    //   confirmPassword: 'test',
    //   address: {
    //     city: 'kanpur',
    //     state: 'UP',
    //     pincode: '122017'
    //   }
    // })
  }
}
