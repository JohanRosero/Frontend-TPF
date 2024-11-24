import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  usuarios: any[] = [];

  constructor (
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void
  {
    this.usersService.getUsuarios().subscribe(
      result => {
        console.log(result)
        this.usuarios = result;
      }
    )
  }
}
