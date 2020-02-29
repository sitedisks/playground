import { IonicModule } from '@ionic/angular'; // from Ionic official
import { RouterModule } from '@angular/router'; // from Angular official
import { NgModule } from '@angular/core'; // from Angular official
import { CommonModule } from '@angular/common'; // from Angular official
import { FormsModule } from '@angular/forms'; // from Angular official
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
