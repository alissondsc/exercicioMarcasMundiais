import ModelExercicio from "../models/pessoa.js";

const model = new ModelExercicio()

class ServicoExercicio {
    PegarUm(index){
        return model.PegarUm(index)
}
    
    PegarTodos(){

    }

    Adicionar(nome){
        if(!nome) {
            throw new Error("Favor preencher nome")
        }
        model.Adicionar(nome)
    }

    Alterar(index, nome){
        if(!nome) {
            throw new Error("Favor preencher nome")
        } else if(!index || isNaN(index)) {
            throw new Error("Favor preencher corretamente o index")
        }

        model.Adicionar(nome)
    }

    Deletar(index){
        if(!index || isNaN(index)) {
            throw new Error("Favor preencher corretamente o index")
    }
    model.Deletar(index)
}

}
