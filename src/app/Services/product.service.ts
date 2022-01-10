import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, addDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private af: AngularFirestore) { }

  getProducts() {
    return this.af.collection('products').valueChanges({idField: 'id'});
  }
}
