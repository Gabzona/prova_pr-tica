const canvas = document.getElementById('JogoCanvas');
const ctx = canvas.getContext('2d');

document.addEventListener('keydown', (e) => { //função de pular ao pressionar tecla A
    if(e.code=='A'){
        personagi.andar_esquerda()
    }
})
document.addEventListener('keydown', (e) => { //função de pular ao pressionar tecla D
    if(e.code=='D'){
        personagi.andar_direita()
    }
})
document.addEventListener('keydown', (e) => { //função de atirar ao pressionar tecla espaço
    if(e.code=='Space'){
        personagi.atirar()
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
}

class Alien extends Entidade{}

class Tiro extends Entidade{}

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
const alens = new Alien(375, 5, 50, 50, 'red')
const jogo = new Jogo()
jogo.loop()
