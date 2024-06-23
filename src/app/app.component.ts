import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'med-assist';

  generatePdf() {
    const data = [    ['Name', 'Email', 'Country'],
      ['John Doe', 'johndoe@example.com', 'USA'],
      ['Jane Smith', 'janesmith@example.com', 'Canada'],
      ['Bob Johnson', 'bobjohnson@example.com', 'UK']
    ];
  
    // let docDefinition = {
    //   content: [
    //     { text: 'User Data', style: 'header' },
    //     { table: { body: data } }
    //   ],
    //   styles: {
    //     header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] }
    //   }
    // };
  

    let docDefinition = {  
      header: 'C#Corner PDF Header',  
      content: 'Sample PDF generated with Angular and PDFMake for C#Corner Blog'  
    };  
   
    pdfMake.createPdf(docDefinition).open();  
}
}
