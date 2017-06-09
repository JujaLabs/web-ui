import {Component, Renderer} from '@angular/core';

@Component({
  selector: 'app-gamification',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(private renderer: Renderer) {
    this.renderer.listenGlobal('window', 'scroll', (event)  => {this.scrollFunction(); } );
  }

  scrollFunction(): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('btnTop').style.display = 'block';
    } else {
      document.getElementById('btnTop').style.display = 'none';
    }
  }

  topFunction(): void {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
  }
}

