import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  profileForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: [''],
    direccion: this.fb.group({
      calle: [''],
      ciudad: [''],
      estado: [''],
      CP: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }


  updateProfile() {
    this.profileForm.patchValue({
      nombre: 'Selena',
      direccion: {
        calle: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  } 
}
