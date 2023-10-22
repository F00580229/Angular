
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', 
})
export class HobbiesData {
  baseUrl = 'http://localhost:3000'; 

  constructor( http) {}

  getAllHobbies() {
    return this.http.get(`${this.baseUrl}/Hobbies`);
  }

  getHobbieById(id) {
    return this.http.get(`${this.baseUrl}/Hobbies/${id}`);
  }

  addHobbie(Hobbie) {
    return this.http.post(`${this.baseUrl}/Hobbies`, Hobbie);
  }

  updateHobbie(id, Hobbie) {
    return this.http.put(`${this.baseUrl}/Hobbies/${id}`, Hobbie);
  }

  deleteHobbie(id) {
    return this.http.delete(`${this.baseUrl}/Hobbies/${id}`);
  }
}




