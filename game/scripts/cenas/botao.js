class Botao {
    constructor(texto, x, y, buttonClass, onMousePressed) {
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.buttonClass = buttonClass;
        this.onMousePressed = onMousePressed;

        this.elemento = createButton(this.texto);
        this.elemento.addClass(buttonClass);
        this.elemento.mousePressed(() => {
            this.onMousePressed(this);
        });
        this.elemento.position(this.x, this.y);
        this.elemento.center('horizontal');
    }

    remove() {
        this.elemento.remove();
    }
}