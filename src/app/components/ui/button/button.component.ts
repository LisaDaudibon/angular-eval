import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input('type')
  public buttonType: 'button' | 'submit' = 'button'

  @Input()
  public color: 'primary' | 'danger' | 'secondary' | 'white' = 'primary'

  @Input()
  public mode: 'fill' | 'ghost' = 'fill'

  @Input()
  public icon: boolean = false

  @Input()
  public href?: string | any[] | null | undefined

  get isLink() {
    return !!this.href
  }

  get classes() {
    return `button is-${this.color}${this.icon ? ' is-icon' : ''} button--${this.mode
      }`
  }
}
