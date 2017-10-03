import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from '../services/user.service';
import { UsersRoutingModule} from './users-routing.module'


@NgModule({
  declarations: [
    UserListComponent    
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    UsersRoutingModule    
  ],
  providers: [UserService],
})
export class UsersModule { }
