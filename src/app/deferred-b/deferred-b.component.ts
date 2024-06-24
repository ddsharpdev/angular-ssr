import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-deferred-b',
  standalone: true,
  imports: [CommonModule],
  template: `<p>deferred-b works!</p>`,
  styleUrl: './deferred-b.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferredBComponent {}
