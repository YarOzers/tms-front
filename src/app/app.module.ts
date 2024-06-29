import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NavbarComponent} from './components/navbar/navbar.component';
import {MainComponent} from './components/main/main.component';
import {TestsuitComponent} from './components/testsuit/testsuit.component';
import {TestcaseListComponent} from './components/testcase-list/testcase-list.component';
import { TestcaseDetailComponent } from './components/testcase-detail/testcase-detail.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {FormsModule} from "@angular/forms";
import { EditorComponent } from './components/editor/editor.component';
import { Editor1Component } from './components/editor1/editor1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    TestsuitComponent,
    TestcaseListComponent,
    TestcaseDetailComponent,
    EditorComponent,
    Editor1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
