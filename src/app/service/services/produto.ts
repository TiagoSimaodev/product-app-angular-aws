import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments.prod';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../../model/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  private URL = environment.Url + 'produto';

  constructor(private http: HttpClient) {}

  buscarTodos() {
    return this.http.get<Produto[]>(this.URL);
  }

  salvar(produto: Produto) {
    return this.http.post<Produto>(this.URL, produto);
  }

  remover(id: number) {
    return this.http.delete<void>(`${this.URL}/${id}`);
  }

}