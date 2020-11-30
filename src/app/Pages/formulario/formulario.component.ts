import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { ValPasswordService } from '../../Services/valPassword/val-password.service';
import { ServicesReqResService } from '../../Services/servicesReqRes/services-req-res.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {
  form: FormGroup;

// Getters de los controles
  // tslint:disable-next-line: typedef
  get validName(){
    // console.log(!this.form.get('nombre').pristine);
     return this.form.get('name').invalid && this.form.get('name').touched;
   }
   // tslint:disable-next-line: typedef
   get validJob(){
    return this.form.get('job').invalid && this.form.get('job').touched;
  }
   // tslint:disable-next-line: typedef
   get validEmail(){
     return this.form.get('email').invalid && this.form.get('email').touched;
   }
   // tslint:disable-next-line: typedef
   get validId(){
    return this.form.get('id').invalid && this.form.get('id').touched;
  }
    // Getters para Password (validacion personalizada)
    // tslint:disable-next-line: typedef
    get Pass1(){
      return this.form.get('pass1').invalid && this.form.get('pass1').touched;
    }
     // tslint:disable-next-line: typedef
    get Pass2(){
     // Declarar dos propiedades constantes.
     const pass1 = this.form.get('pass1').valid;
     const pass2 = this.form.get('pass2').valid;

     // if de operador ternario
     return (pass1 === pass2) ? false : true;
    }

  constructor(private fb: FormBuilder, private sV: ValPasswordService, private sRR: ServicesReqResService) { this.createForm(); }

  ngOnInit(): void {
  }

   // tslint:disable-next-line: typedef
   createForm(){
    this.form = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(1)] ],
      name: ['', [Validators.required, Validators.minLength(4)] ],
      job: ['', [Validators.required, Validators.minLength(4)] ],
      email: ['', [Validators.required,  Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      // para validacion personalizada
      pass1: ['', Validators.required],
      pass2: ['', Validators.required]
    },
    {
      validators: this.sV.matchPassword('pass1', 'pass2')
    });
  }

  // tslint:disable-next-line: typedef
enviar(){
  console.log(this.form.value);
  this.sRR.createUser(this.form.value).subscribe(value => {
    this.sRR.setUser(value);
    const token = this.form.value;
    this.sRR.setToken(token);
    //location.reload();
  });
  // Mensajes de error, pero tambien nos servira para hacer un POST (evitar enviarlo si es que la informacion es incorrecta).
  if (this.form.invalid){
    /* solo form controls sin form group
    return Object.values( this.form.controls).forEach(control => {
      control.markAsTouched();*/
      return Object.values( this.form.controls).forEach(control => {
        // instanceOf es de JS y el FormGroup es lo que inportamos.
        // Control: Llegar a un objeto por una instancia a FormGroup.
        // Si el elemento que esta a la izquierda es una instancia, el de la derecha son clases.
        if (control instanceof FormGroup){
          return Object.values(control.controls).forEach (control => control.markAsTouched());
        }else{
          control.markAsTouched();
        }
          });
  }
}

}
