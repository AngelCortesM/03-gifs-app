import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private GifsService: GifsService) {}

  get tags(): string[] {
    return this.GifsService.tagsHistory;
  }

  searchTag(tag: string) {
this.GifsService.searchTag(tag);
  }
}
