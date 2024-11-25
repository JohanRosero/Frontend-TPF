import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  usuarios: any[] = [];

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  crearUsuario(): void {
    this.router.navigate(['/usersForm', '']);
  }

  getUsuarios(): void {
    this.usersService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (error) => {
        console.error('No se puede acceder a los datos', error);
      }
    })
  }

  deleteUsuario(id: string): void {
    this.usersService.deleteUsuario(id).subscribe({
      next: (response) => {
        this.getUsuarios();
        this.router.navigate([this.router.url]);
      },
      error: (error) => {
        console.error('No se puede eliminar el usuario', error);
      }
    })
  }
}
