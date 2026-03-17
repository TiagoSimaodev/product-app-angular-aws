import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { Navbar } from './navbar/navbar';
import { ProdutoService } from './service/services/produto';
import { Produto } from './model/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    Navbar
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.sass']
})
export class App {

  produtos: Produto[] = [];

  produtoform!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService
  ) {

    this.produtoform = this.fb.group({
      id: [],
      nome: [null, Validators.required],
      valor: [null, Validators.required],
      descricao: []
    });

    this.buscarProdutos();

  }

  buscarProdutos() {
    this.produtoService.buscarTodos().subscribe({
      next: (res) => {
        this.produtos = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  criarProduto(): Produto {
    return {
      id: this.produtoform.get('id')?.value,
      nome: this.produtoform.get('nome')?.value,
      valor: this.produtoform.get('valor')?.value,
      descricao: this.produtoform.get('descricao')?.value
    };
  }

  salvar() {
    if(this.produtoform.valid){
    const produto = this.criarProduto();
    console.log('produto', produto);

    this.produtoService.salvar(produto).subscribe(
      {
        next: (response) => {
          this.produtoform.reset();
          this.buscarProdutos();
          alert('Produto salvo com sucesso!');
          
        },
      error: (error) => {
        console.error('Erro ao salvar produto', error);
        alert('Ocorreu um erro ao salvar o produto. Por favor, tente novamente.');
      },    
    }
  )
    }
  }

  remover(produto: Produto) {
    const confirmacao = confirm("Quer realmente excluir esse produto? " + produto.nome);
    if (confirmacao){
      const id = produto.id;
      this.produtoService.remover(id).subscribe(
        {
          next: (response) => {
            this.buscarProdutos();
            alert('Produto removido com sucesso!');
            
          },
          error: (error) => {
            console.log(error);
          }     
     });
    }
  }

}