import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-excis-home',
  templateUrl: './excis-home.component.html',
  styleUrls: ['./excis-home.component.css'],
})
export class ExcisHomeComponent implements OnInit {

  @ViewChild('whiteOverlay') whiteOverlay!: ElementRef

  ngOnInit(): void {
    setTimeout(() => {
      this.renderer.addClass(this.whiteOverlay.nativeElement, 'fade-out-overlay')
    }, 1000)

    setTimeout(() => {
      this.renderer.addClass(this.whiteOverlay.nativeElement, 'display-none')
    }, 2000)
  }

  constructor(
    public audioService: AudioService,
    public renderer: Renderer2
  ) {
  }

}
