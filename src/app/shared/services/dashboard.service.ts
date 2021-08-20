import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { dashboardSummaryResponse } from '../interface/dashboard.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiUrl = environment.api_base_url

  constructor(private http: HttpClient) { }

  fetchDashboardSummery(){
    return this.http.get<dashboardSummaryResponse>(this.apiUrl+'Dashboard/GetSummary')
  }

}
