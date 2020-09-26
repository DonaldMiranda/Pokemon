import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Global} from '../Services/Global';


@Injectable()
export class PokemonService{
    public api_catalog:string;
    public api_data:string;
    Name:'';
    constructor(
        private _http:HttpClient
    ){
        this.api_catalog = Global.api_catalog;
        this.api_data = Global.api_data;
    }
    
    getPokemonList():Observable<any>{    
        return this._http.get(this.api_catalog);
    }
    getPokemon(idPokemon):Observable<any>{    
        return this._http.get(this.api_data + idPokemon);
    }
}