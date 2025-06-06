import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-establecimientos',
  imports: [ ReactiveFormsModule,CommonModule],
  templateUrl: './establecimientos.component.html',
  styleUrl: './establecimientos.component.css'
})
export class EstablecimientosComponent {



  formEstablecimiento: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formEstablecimiento = this.fb.group({
      nombre: ['', Validators.required],
      departamento: ['', Validators.required],
      localidad: ['', Validators.required],
      direccion: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.formEstablecimiento.valid) {
      console.log('Establecimiento guardado:', this.formEstablecimiento.value);
      // Aquí puedes agregar lógica para enviar los datos al backend
    }
  }
}



