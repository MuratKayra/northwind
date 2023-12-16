//Data'yı yönettiğin yer
//Component html'in datasını yönettiğimiz yer
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { NaviComponent } from './components/navi/navi.component';
import { CategoryComponent } from './components/category/category.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ToastrService } from 'ngx-toastr';

//{} parantez obje demek
// ./ aynı klasör demek
// [] parantez array demek
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    ProductComponent,
    NaviComponent,
    CategoryComponent,
    CartSummaryComponent
  ],
})
export class AppComponent {
  title: string = 'northwind';
  user = 'Engin Demiroğ';
}
