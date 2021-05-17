import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
//import { DataService } from ' ../shared/data.service';
import { DataService } from '../../shared/data.service';
@Component({
  selector: 'app-detailsp',
  templateUrl: './detailsp.component.html',
  styleUrls: ['./detailsp.component.css']
})
export class DetailspComponent implements OnInit {

    public product: any = { };
  constructor(private route:ActivatedRoute, private dataSvc: DataService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    [this.product] = this.dataSvc.getProductById(productId);
    console.log('Product->', this.product);
    
  }

}
