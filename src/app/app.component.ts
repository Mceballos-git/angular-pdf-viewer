import { Component } from '@angular/core';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )

export class AppComponent {

  // DECLARO LA VARIABLE CON VALOR POR DEFECTO
  pdfSrc = '';

  constructor() {

    function getQueryVariable() {
      var query = window.location.search.substring( 1 );
      const final = query.substring( 4 );
      return final;
    }

    // CARGO LA URL DEL PDF EN LA VARIABLE QUE LEE LA LIBRERIA
    this.pdfSrc = getQueryVariable();

    // IMPRIMO LA URL  DEL PDF
    console.log( 'PDFSRC ' + this.pdfSrc );

  }
}


