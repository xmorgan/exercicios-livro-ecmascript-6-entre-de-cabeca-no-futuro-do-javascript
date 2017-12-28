class Perfil {
	// implementação do Perfil
}

export default Perfil;

import Perfil as Jogador from './profile';

import { adicionarPerfil as adicionarJogador } from './Perfil';

adicionarPerfil(); // ERRO!
adicionarJogador(); // Ok
