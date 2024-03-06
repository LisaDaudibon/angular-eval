import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { debounce, interval } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  searchForm

  @Input() loading: boolean = false
  @Output('query') queryChange: EventEmitter<string> = new EventEmitter()

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.nonNullable.group({
      query: [''],
    })

    this.searchForm.valueChanges
      .pipe(debounce((value) => interval(value.query ? 600 : 0)))
      .subscribe((formValue) => this.queryChange.emit(formValue.query))
  }
}
