import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomepageComponent],
  exports: [HeaderComponent, FooterComponent, HomepageComponent],
  imports: [],
})
export class CommonModule {}
