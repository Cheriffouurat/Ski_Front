import {Component, OnInit} from '@angular/core';
import {SubscriptionService} from "../subscription.service";
import {Router} from "@angular/router";
import {Ski} from "../Models/Ski";

@Component({
  selector: 'app-skier',
  templateUrl: './skier.component.html',
  styleUrls: ['./skier.component.css']
})
export class SkierComponent implements OnInit {

  listski !:Ski[]
  constructor(
    private service: SubscriptionService,
    public router : Router

  ) {}
  ngOnInit(): void {
    this.service.getAllSki().subscribe({
      next: (data) => {
        this.listski = data,
          console.log(data);

      }

    });}
}
