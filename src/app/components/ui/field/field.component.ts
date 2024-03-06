import { Component, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent {
  @Input() label?: string
  @Input('control') formControl?: AbstractControl | null
  @Input('errors') errorsText?: string | Record<string, string> =
    'Champ obligatoire'

  get errors() {
    return this.formControl?.errors
  }

  get errorType() {
    return typeof this.errorsText
  }

  getErrorsText(key: string) {
    return (this.errorsText as Record<string, string>)?.[key]
  }
}
