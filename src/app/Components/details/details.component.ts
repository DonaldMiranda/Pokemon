import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../Services/Pokemon.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../Services/Global';
import { DomSanitizer } from '@angular/platform-browser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [PokemonService]
})
export class DetailsComponent implements OnInit {

  public id_pokemon: number;
  public pokemon: string;
  public pokemon_image: string;
  public pokemon_type: string;
  public pokemon_abilities: string;
  public pokemon_details: any[];
  public pokemon_generation: any[];

  constructor(
    private _pokemonService: PokemonService,
    private domSanitizer: DomSanitizer,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.pokemon_details = [],
    this.pokemon_generation = []
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id_pokemon = params.idPokemon;
      this.pokemon = params.name;
      this.pokemon_image = Global.url_image + params.idPokemon + '.png';
    });

    if (this.id_pokemon != 0 || this.id_pokemon) {
      this.getPokemonDetail(this.id_pokemon);
    }
  }

  getPokemonDetail(idPokemon) {
    this._pokemonService.getPokemon(idPokemon).subscribe(
      response => {
        if (this.pokemon == response.forms[0].name) {
          //Obtener String de tipo de pokemon
          for (var i = 0; i < response.types.length; i++) {
            if ((i > 0)) {
              this.pokemon_type += " / " + response.types[i].type.name;
            } else {
              this.pokemon_type = response.types[i].type.name
            }
          }

          //Obtener String de Habilitades
          for (var i = 0; i < response.abilities.length; i++) {
            if ((i > 0)) {
              this.pokemon_abilities += " / " + response.abilities[i].ability.name;
            } else {
              this.pokemon_abilities = response.abilities[i].ability.name;
            }
          }

          // Obtener porcentajes de ataques
          for (var i = 0; i < response.stats.length; i++) {
            var stat = {
              name: response.stats[i].stat.name,
              quantity: response.stats[i].base_stat
            }
            this.pokemon_details.push(stat);
          }

          //Obtener generaciones
          for (let item in response.sprites.versions) {
            var generation = item;
            var icon;
            for (var i = 0; i < 1; i++) {
              var firts = true;
              for (let gen in response.sprites.versions[item]) {
                if (firts) {
                  icon = response.sprites.versions[item][gen].front_default;
                  firts = false;
                }
              }
            }
            var pokemon = { generation: generation, icon: icon }
            this.pokemon_generation.push(pokemon);
          }
        } else {
          this._router.navigate(['**'])
        }
      }, error => {
        console.log(error);
      }
    )
  }
  imageURL(image) {
    return this.domSanitizer.bypassSecurityTrustUrl(image);
  }
}
