import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDrawerModule } from 'ng-zorro-antd/drawer'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { ToDoComponent } from './to-do/to-do.component';
import { CounterComponent } from './counter/counter.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoDrawerComponent } from './to-do-drawer/to-do-drawer.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { NativeComponent } from './native/native.component';
import { ObservableComponent } from './observable/observable.component';
import { TemplateComponent } from './template/template.component';
import { ListComponent } from './list/list.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    CounterComponent,
    ToDoItemComponent,
    ToDoDrawerComponent,
    ChildComponent,
    ParentComponent,
    NativeComponent,
    ObservableComponent,
    TemplateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzSliderModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    NzCheckboxModule,
    NzRadioModule,
    NzSelectModule,
    NzSwitchModule,
    NzListModule,
    NzTabsModule,
    NzLayoutModule,
    NzDrawerModule,
    NzDatePickerModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
