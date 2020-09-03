import { Component, OnInit } from '@angular/core';
import employees from '../employees';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0,
  };  

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee() {
    const copy = Object.assign({}, this.employee); // Cria uma copy para caso altere o input, não reflita nos valores na tabela
    this.employeeService.addEmployee(copy);
  }

}
