import { Component } from '@angular/core';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )

export class AppComponent {

  // Declare the variable empty by default
  pdfSrc = '';

  constructor() {

    const getQueryParam = () => {
      var query = window.location.search; // ?url=LinkToPfd

      // Remove the first 5 characters 
      const final = query.substring( 5 ); // LinkToPdf

      return final;
    }


    // I load the data in the variable with the link to the PDF
    this.pdfSrc = getQueryParam();

    // Print in Console the PDF URL
    console.log( 'PDFSRC -> ' + this.pdfSrc );
  }
}


