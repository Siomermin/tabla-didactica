import { Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  public router = inject(Router);
  public renderer = inject(Renderer2);

  @ViewChild('nombre') nombre!: ElementRef;
  @ViewChild('division') division!: ElementRef;

  ngOnInit(): void {
    setTimeout(() => {
       this.renderer.addClass(this.nombre.nativeElement, 'shake-horizontal');
       this.renderer.addClass(this.division.nativeElement, 'shake-horizontal');
    }, 1500); // Add classes after 1 second (1000 milliseconds)

    setTimeout(() => {
      this.router.navigateByUrl('auth/login');
    }, 4000);
  }

}
