import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visor-pdf',
  templateUrl: './visor-pdf.component.html',
  styleUrls: ['./visor-pdf.component.css']
})
export class VisorPdfComponent implements OnInit {

  // Declare the variable empty by default
  pdfSrc = '';

  constructor() {}

  ngOnInit(): void {

     const getQueryParam = () => {
      var query = window.location.search; // ?url=LinkToPfd
      // Remove the first 5 characters 
      const final = query.substring( 5 ); // LinkToPdf
      return final;
    }

    try {
      // I load the data in the variable with the link to the PDF
      this.pdfSrc = getQueryParam();
      // Print in Console the PDF URL
      console.log( 'PDFSRC -> ' + this.pdfSrc );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
}
