import {Component, OnInit} from '@angular/core';
import {RecapitulatifService} from "../../../controller/service/recapitulatif.service";
import {Recapitulatif} from "../../../controller/model/recapitulatif.model";

@Component({
  selector: 'app-recapitulatif-list',
  templateUrl: './recapitulatif-list.component.html',
  styleUrls: ['./recapitulatif-list.component.css']
})
export class RecapitulatifListComponent implements OnInit{
  ngOnInit(): void {
    this.findAll();
  }
  constructor(private recapitulatifService:RecapitulatifService) {
  }
  public findAll():void{
    this.recapitulatifService.findAll().subscribe(
      data => this.recapitulatifs = data
    );
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
  public delete(r: Recapitulatif) {
    this.recapitulatifService.deleteByReference(r.code).subscribe(
      data => {
        let index = this.recapitulatifs.findIndex(e => r.code == e.code);
        this.recapitulatifs.splice(index, 1);
      }
    );
  }

}
