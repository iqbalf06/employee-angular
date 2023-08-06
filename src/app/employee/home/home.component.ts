import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataList: {
    id: number;
    name: string;
    dob: Date;
    gender: string;
    department: string;
  }[] = [];

  departmentCounts: { department: string; count: number }[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getDataList();
  }

  getDataList() {
    this.homeService.getDataList().subscribe(
      (res) => {
        this.dataList = res.data;
        this.calculateDepartmentCounts();
        console.log(res);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  calculateDepartmentCounts() {
    const departmentMap: { [key: string]: number } = {};

    this.dataList.forEach((data) => {
      if (departmentMap[data.department]) {
        departmentMap[data.department]++;
      } else {
        departmentMap[data.department] = 1;
      }
    });

    this.departmentCounts = Object.keys(departmentMap).map((department) => ({
      department,
      count: departmentMap[department],
    }));
  }

  getIconForDepartment(department: string): string {
    switch (department) {
      case 'IT':
        return 'desktop_windows';
      case 'Finance':
        return 'attach_money';
      case 'HR':
        return 'people';
      case 'Legal':
        return 'gavel';
      case 'Customer Service':
        return 'headset_mic';
      case 'Administrator':
        return 'admin_panel_settings';
      default:
        return 'work_outline';
    }
  }

  getIconClass(department: string): string {
    switch (department) {
      case 'IT':
        return 'it-icon';
      case 'Finance':
        return 'finance-icon';
      case 'HR':
        return 'hr-icon';
      case 'Legal':
        return 'legal-icon';
      case 'Customer Service':
        return 'customer-service-icon';
      case 'Administrator':
        return 'administrator-icon';
      default:
        return '';
    }
  }
}
