function Sprite(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas) {
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);

	}
}

var bg = new Sprite(400, 0, 600, 600),
spriteBoneco = new Sprite(1445, 0, 87, 87),

perdeu = new Sprite(1445, 517, 258, 358),
jogar = new Sprite(1445, 98, 345, 397),
novo = new Sprite(1445, 980, 258, 58),
spriteRecord = new Sprite(1445, 900, 258, 58),
spriteChao = new Sprite(0, 940, 600, 54);
