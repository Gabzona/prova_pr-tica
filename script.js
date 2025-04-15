const canvas = document.getElementById('JogoCanvas');
const ctx = canvas.getContext('2d');

document.addEventListener('keydown', (e) => { //função de andar ao pressionar tecla A
    if(e.code=='A'){
        personagi.andar_esquerda()
        console.log(A)
    }
})
document.addEventListener('keydown', (e) => { //função de andar ao pressionar tecla D
    if(e.code=='D'){
        personagi.andar_direita()
        console.log(D)
    }
})
document.addEventListener('keydown', (e) => { //função de atirar ao pressionar tecla espaço
    if(e.code=='Space'){
        personagi.atirar()
        console.log(espaço)
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
    #velocidade_x //encapsulando pra não mudar a velocidade da nave
    constructor(x, y, largura, altura, cor){
        super(x, y, largura, altura, cor)
        this.andando = false //o personagem está parado
        this.imagem = new Image()
        this.imagem.src = '../' //adicionar imagem depois
        this.#velocidade_x = 0
    }
    andar_esquerda(){
        andando = true
        this.#velocidade_x = -15

    }
    andar_direita(){
        andando = true
        this.#velocidade_x = 15

    }
    atirar(){

    }
    atualizar(){}
    verificaColisao(){
        if (
            alens.y > personagi.y + personagi.altura &&
            alens.altura + alens.y < personagi.y
        ) {
            alens.velocidade_y = 0;
            personagi.velocidade_x = 0;
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

class Alien extends Entidade{
    #velocidade_y
    constructor(x, y, largura, altura, cor){
        super(x, y, largura, altura, cor)
        this.#velocidade_y = 3 //movimento do alien descendo
        this.vivo = true //não foi atingido
    }
    atualizar(){
        this.y += this.#velocidade_y
        if(this.y > 350){
            let nova_posicao = Math.random() * 100
        }
    }
}

class Tiro extends Entidade{

}

class Jogo{
    static gravidade = 0.5
    static gameOver = false
    constructor(){
        this.loop = this.loop.bind(this)
    }
    loop () {
        if(Jogo.gameOver == false){
        ctx.clearRect(0,0, canvas.width, canvas.height)
        alens.desenhar()
        personagi.desenhar()
        personagi.verificaColisao()
        alens.atualizar()
        personagi.atualizar()
        requestAnimationFrame(this.loop)
        }
    }
}

const personagi = new Nave(375, 345, 50, 50, 'white')
const alens = [new Alien(375, 5, 50, 50, 'red')]
const jogo = new Jogo()
jogo.loop()
