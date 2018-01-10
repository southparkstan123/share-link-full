import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LinksComponent } from './links/links.component';
import { AddlinkComponent } from './addlink/addlink.component';
import { SearchComponent } from './search/search.component';
import { LinkfilterPipe } from './linkfilter.pipe';
import { LinksService } from './links.service';
import { EditlinkComponent } from './editlink/editlink.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    LinksComponent,
    AddlinkComponent,
    SearchComponent,
    LinkfilterPipe,
    EditlinkComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: LinksComponent},
      {path: 'addlink' , component: AddlinkComponent},
      {path: 'editlink/:id' , component: EditlinkComponent},
      {path: '**' , component: PageNotFoundComponent}
  ]),
  ],
  providers: [LinksService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
