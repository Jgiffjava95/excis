import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.css']
})
export class LaunchPageComponent {

  @ViewChild('launchPage') launchpage!: ElementRef;

  constructor(
    public audioService: AudioService,
    public router: Router,
    public renderer: Renderer2
  ) {

  }

  launch(): void {
    this.renderer.addClass(this.launchpage.nativeElement, 'fade-in-white');
    setTimeout(() => {
      this.audioService.playAudio();
      this.router.navigateByUrl('home');
    }, 3000);
  }

}
