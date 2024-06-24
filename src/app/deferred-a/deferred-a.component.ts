import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-deferred-a',
  standalone: true,
  imports: [CommonModule],
  template: `<p>deferred-a works!</p>`,
  styleUrl: './deferred-a.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferredAComponent {}
