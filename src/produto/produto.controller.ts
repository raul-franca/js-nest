import { Body, Controller, Get, Post } from '@nestjs/common';

import { ProdutoRepository } from './produto.repository';
import { CriaUsuarioDTO } from '../usuario/dto/CriaUsuario.dto';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  @Post()
  criaNovo(@Body() dadosProduto: CriaUsuarioDTO) {
    const produtoCadastrado = this.produtoRepository.salva(dadosProduto);
    return produtoCadastrado;
  }

  @Get()
  listaTodos() {
    return this.produtoRepository.listaTodos();
  }
}
