import {Component, OnInit} from '@angular/core';
import {RecapitulatifService} from "src/app/controller/service/recapitulatif.service";
import {Recapitulatif} from "src/app/controller/model/recapitulatif.model";

@Component({
  selector: 'app-recapitulatif-create',
  templateUrl: './recapitulatif-create.component.html',
  styleUrls: ['./recapitulatif-create.component.css']
})
export class RecapitulatifCreateComponent implements OnInit{
  ngOnInit(): void {
  }

  public save(): void{
    this.recapitulatifService.save(this.recapitulatif).subscribe(
      data => {
        if (data == null) {
          alert('failure : code exist')
        }else{
          //this.recapitulatif = null;
          alert('success : paiement sav')
        }
      }
    );
  }
  constructor(private recapitulatifService: RecapitulatifService) {
  }
  get recapitulatif(): Recapitulatif {
    return this.recapitulatifService.recapitulatif;
  }

  set recapitulatif(value: Recapitulatif) {
    this.recapitulatifService.recapitulatif = value;
  }

  get recapitulatifs(): Array<Recapitulatif> {
    return this.recapitulatifService.recapitulatifs;
  }

  set recapitulatifs(value: Array<Recapitulatif>) {
    this.recapitulatifService.recapitulatifs = value;
  }

}
