import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}
  @Post()
  async criarUsuario(@Body() dadosUsuario) {
    this.usuarioRepository.salvar(dadosUsuario);
    return { dadosUsuario };
  }

  @Get()
  async listarUsuarios() {
    return this.usuarioRepository.listar();
  }
}
