import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../Services/Pokemon.service';
import { Global } from '../../Services/Global';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [PokemonService]
})
export class CatalogComponent implements OnInit {

  public CatalogPokemon: any[];
  Config: any;
  Name = '';
  public page:number;
  constructor(
    private _PokemonService: PokemonService,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.CatalogPokemon =[],
    this.Config = {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0
    }
    route.queryParams.subscribe(
      params => this.Config.currentPage = params['page'] ? params['page'] : 1 
    )
  }

  ngOnInit() {
    this.getPokemonList();
  }
  imageURL(image) {
    return this.domSanitizer.bypassSecurityTrustUrl(image);
  }
  getPokemonList() {
    this._PokemonService.getPokemonList().subscribe(
      response => {
        for (var i = 0; i < response.results.length; i++) {
          var pokemon = {
            id: i + 1,
            name: response.results[i].name,
            url: response.results[i].url,
            image: Global.url_image + (i + 1) + ".png"
          }
          this.CatalogPokemon.push(pokemon);
      
        }
        console.log(this.CatalogPokemon);
      }, error => {
        console.log(<any>error)
      }
    )
  }
  pageChange(newPage: number) {
    this.router.navigate([''], { queryParams: { page: newPage } });
  }

}
