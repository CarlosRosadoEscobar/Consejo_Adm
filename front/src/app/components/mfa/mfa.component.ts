import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { MfaService } from 'src/app/services/mfa.service';

@Component({
  selector: 'app-mfa',
  standalone: true,
  imports: [],
  templateUrl: './mfa.component.html',
  styleUrl: './mfa.component.css'
})
export class MfaComponent {
  tiempoInicial: number = 300;
  tiempoRestante: number = this.tiempoInicial;
  intervalo: any;
  inputValue: string = '';
  mostrarBotonRenviar: boolean = false;
  intentosFallidos: number = 0;
  maximoIntentos: number = 3;
  intentosExitosos: number = 0;
  maximoIntentosExitosos: number = 3;
  contadorReinicios: number = 0;

  constructor(
    private router: Router,
    private _MfaService: MfaService

  ) { }

  ngOnInit() {
    this.iniciarTemporizador();
  }

  iniciarTemporizador() {
    console.log("Temporizador iniciado");
    console.log("Temporizador iniciado. Reinicio número:", this.contadorReinicios);
    if (this.contadorReinicios == 2) {
      console.log("limite de reinicio alcanzado");
      this.router.navigate(['login']);
    }
    this.contadorReinicios++;
    this.tiempoRestante = this.tiempoInicial;
    this.inputValue = '';
    this.intervalo = setInterval(() => {
      this.tiempoRestante--;
      if (this.tiempoRestante <= 0) {
        clearInterval(this.intervalo);
        console.log("El temporizador de 3 minutos ha terminado");
        this.mostrarBotonRenviar = true;
      }
    }, 1000);
  }

  obtenerTiempoFormateado(tiempoRestante: number): string {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    return `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
  }

  soloNumeros(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    const inputValue = event.target.value + inputChar;

    if (!pattern.test(inputChar) || inputValue.length > 6) {
      event.preventDefault();
    }
  }

  habilitarBoton(event: any) {
    this.inputValue = event.target.value;
  }

  verificar() {
    if (this.inputValue.length !== 6) {
      console.log("Número no válido: Debe tener exactamente 6 caracteres.");
      this.intentosFallidos++;
      if (this.intentosFallidos >= this.maximoIntentos) {
        console.log("Intentos máximos alcanzados.");
        this.router.navigate(['login']);
      }
      return;
    }

    console.log("Valor del input:", this.inputValue);

    this._MfaService.enviarCodigo(this.inputValue).subscribe(
      respuesta => {
        console.log("Respuesta del backend:", respuesta)
        if (respuesta.status === 200) {
          this.router.navigate(['login']);
        } else {
        }
      },
      error => {
        if (error.status === 404) {
          console.log("No se encontraron coincidencias:", error.error.message);
        } else if (error.status === 200){
          console.log("Operación exitosa. Mensaje recibido del servidor:");
          this.router.navigate(['login']);
        }else if (error.status === 400){
          console.log("Se termino el tiempo");
          this.router.navigate(['login']);
        } else {
          console.log("Error desconocido:", error.error.message);
        }
      }
    );

    this.intentosExitosos++;
    if (this.intentosExitosos >= this.maximoIntentosExitosos) {
      console.log("Máximo de intentos exitosos alcanzado.");
      this.router.navigate(['login']);
    }

    // this.contadorReinicios = 0;
  }

  renviar() {
    console.log("btn renviar precionado");
    clearInterval(this.intervalo);
    this.iniciarTemporizador();
  }


}

