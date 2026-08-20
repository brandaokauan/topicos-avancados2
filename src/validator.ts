const TITULO_MIN_LENGTH = 5;
const TITULO_MAX_LENGTH = 100;

function validarChamado(titulo: string): boolean {
    if (!titulo || titulo.trim() === "") {
        throw new Error("O título do chamado não pode ser vazio.");
    }
    
    if (titulo.trim().length < TITULO_MIN_LENGTH) {
        throw new Error(
            `O título do chamado deve possuir no mínimo ${TITULO_MIN_LENGTH} caracteres.`
        );
    }

    if (titulo.trim().length > TITULO_MAX_LENGTH) {
        throw new Error(
            `O título do chamado deve possuir no máximo ${TITULO_MAX_LENGTH} caracteres.`
        );
    }

    return true;
}

export default validarChamado;