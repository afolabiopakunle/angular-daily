import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { GirlsComponent } from './girls/girls.component';
import { GoingPlacesComponent } from './going-places/going-places.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
{path: 'test', component: TestComponent },
{path: 'contacts', component: ContactsComponent},
{path: 'girls', component: GirlsComponent},
{path: 'going-places', component: GoingPlacesComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}