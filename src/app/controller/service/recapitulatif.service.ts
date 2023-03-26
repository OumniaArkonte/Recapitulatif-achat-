import { Injectable } from '@angular/core';
import {Recapitulatif} from "../model/recapitulatif.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecapitulatifService {
  private _recapitulatif!: Recapitulatif;
  private _recapitulatifs!: Array<Recapitulatif>;
  private _url = "http://localhost:8036/api/v1/recapitulatif/"

  constructor(private _http:HttpClient) { }
  public findAll():Observable<Array<Recapitulatif>>{
    return this._http.get<Array<Recapitulatif>>(this.url);
  }
  public save(recapitulatif: Recapitulatif):Observable<Recapitulatif>{
    return this._http.post<Recapitulatif>(this.url , recapitulatif);
  }
  public  deleteByReference(code: string): Observable<number>{
    return this._http.delete<number>(this.url+'code/'+code);
  }

  get recapitulatif(): Recapitulatif {
    return this._recapitulatif;
  }

  set recapitulatif(value: Recapitulatif) {
    this._recapitulatif = value;
  }

  get recapitulatifs(): Array<Recapitulatif> {
    return this._recapitulatifs;
  }

  set recapitulatifs(value: Array<Recapitulatif>) {
    this._recapitulatifs = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
