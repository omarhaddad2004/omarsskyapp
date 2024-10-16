import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../highlight.pipe';
import { VacationRequestService } from '../vacation-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vecpage',
  standalone:true,
  templateUrl: './vecpage.component.html',
  imports:[ CommonModule ,FormsModule ,HighlightPipe],
  styleUrls: ['./vecpage.component.css']
})
export class VecpageComponent {
  searchTerm: string = '';
  requests: any[] = [];

  constructor(private vacationRequestService: VacationRequestService, private router: Router) {
    // Fetch only the first 9 requests for the first page
    this.requests = this.vacationRequestService.getData().slice(0, 9);
  }

  // Function to filter requests based on the search term
  filteredRequests() {
    return this.requests.filter(request =>
      request.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Pagination: Navigate to next page (Vecpage2)
  navigateToNext() {
    this.router.navigate(['/view-more']);
  }

  // Pagination: Handle navigation from the pagination buttons
  navigateTo(page: number) {
    if (page === 2) {
      this.router.navigate(['/view-more']);
    }
  }
}
