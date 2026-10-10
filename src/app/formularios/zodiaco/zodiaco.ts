import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.html',
  styleUrl: './zodiaco.css'
})
export class Zodiaco implements OnInit {
  formulario!: FormGroup;

  nombreCompleto: string = '';
  edad: number = 0;
  signo: string = '';
  imagenSigno: string = ''; 
  mostrado: boolean = false;

  anioIngresado: number = 0;
  indice: number = 0;
  indiceFinal: number = 0;

  animales: string[] = [
    'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente',
    'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'
  ];

  imagenesAnimales: string[] = [
    'https://www.horoscopochino.eu/assets/img/zodiaco/s/rata.jpg',     
    'https://www.horoscopochino.eu/assets/img/zodiaco/s/buey.jpg',     
    'https://www.horoscopochino.eu/assets/img/zodiaco/s/tigre.jpg',    
    'https://www.horoscopochino.eu/assets/img/zodiaco/s/conejo.jpg',   
    'https://www.horoscopochino.eu/assets/img/zodiaco/s/dragon.jpg',   
    'https://www.horoscopochino.eu/assets/img/zodiaco/s/serpiente.jpg', 
    'https://www.horoscopochino.eu/assets/img/zodiaco/s/caballo.jpg',  
    'https://www.horoscopochino.eu/assets/img/zodiaco/s/cabra.jpg',    
    'https://www.horoscopochino.eu/assets/img/zodiaco/s/mono.jpg',     
    'https://www.horoscopochino.eu/assets/img/zodiaco/s/gallo.jpg',    
    'https://www.horoscopochino.eu/assets/img/zodiaco/s/perro.jpg',    
    'https://www.horoscopochino.eu/assets/img/zodiaco/s/cerdo.jpg'     
  ];

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  calcularZodiaco(): void {
    this.nombreCompleto = this.formulario.value.nombre + ' ' + this.formulario.value.apaterno + ' ' + this.formulario.value.amaterno;
    this.edad = 2026 - Number(this.formulario.value.anio);

    this.anioIngresado = Number(this.formulario.value.anio);
    this.indice = (this.anioIngresado - 1900) % 12;
    this.indiceFinal = this.indice >= 0 ? this.indice : this.indice + 12;

    this.signo = this.animales[this.indiceFinal];
    this.imagenSigno = this.imagenesAnimales[this.indiceFinal];
    this.mostrado = true;
  }
}