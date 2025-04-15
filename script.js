const canvas = document.getElementById('JogoCanvas');
const ctx = canvas.getContext('2d');

document.addEventListener('keydown', (e) => { //função de pular ao pressionar tecla A
    if(e.code=='A'){
        personagi.andar_esquerda() //chama a função saltar já q não da pra mudar propriedade encapsulada
    }
})
document.addEventListener('keydown', (e) => { //função de pular ao pressionar tecla D
    if(e.code=='D'){
        personagi.andar_direita() //chama a função saltar já q não da pra mudar propriedade encapsulada
    }
})

class Entidade{
    #x
    #y
    constructor(x, y, largura, altura, cor){
        this.#x = x;
        this.#y = y;
        this.largura = largura
        this.altura = altura
        this.cor = cor
    }
    desenhar(){
        ctx.fillStyle = this.cor
        ctx.fillRect(this.#x, this.#y, this.largura, this.altura)
    }
}

class Nave extends Entidade{
    #velocidade_x //encapsulando(privando) a velocidade pro jogador não alterar a velocidade no console
    constructor(x, y, largura, altura, cor){
        super(x, y, largura, altura, cor)
        this.#velocidade_x = 0 //pulo do personagem
        this.andando = false //personagem está parado
    }
    andar_esquerda(){
        this.x -= this.#velocidade_x
        this.andando = true
    }
    atualizar(){
        if(this.andando){
            this.x -= this.#velocidade_x
            this.#velocidade_x -= Jogo.gravidade
            if(this.x >= canvas.width - 50){
                this.#velocidade_x = 0
                this.x = canvas.width - 50
                this.andando = false
            }
        }
    }
    verificaColisao() {
        if (
            obstacolo.x < personagi.x + personagi.largura &&
            obstacolo.largura + obstacolo.x > personagi.x &&
            personagi.y < obstacolo.y + obstacolo.altura &&
            personagi.y + personagi.altura > obstacolo.y
        ) {
            obstacolo.velocidade_x = 0;
            personagi.velocidade_y = 0;
            ctx.fillStyle = "black";
            ctx.font = '50px Arial';
            ctx.fillText('GAME OVER', 50, 100);
            Jogo.gameOver = true;
        }
    }
    desenhar(){
        ctx.drawImage(
            this.imagem,
            this.x,
            this.y,
            this.largura,
            this.altura,
        )
    }
}

class Alien extends Entidade{}

class Tiro extends Entidade{}

class Jogo{}

