import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
  
  heroes:string[]=['Spiderman','Iroman','Hulk','Thor'];
  heroeBorrado:string='';
  borrarHeroe(){
    // console.log('borrando...');
    // this.heroes.pop();
    // this.heroes=[];
    this.heroeBorrado=this.heroes.shift() || '';
    
    
    
  }

  
}


