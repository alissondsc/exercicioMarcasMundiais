const nomes = ne Array("A","B","C");

class ModelExercicio {
    PegarUm(index){
        return nomes[index]
    }

    PegarTodos(){
        return nomes
    }

    Adicionar(nome){
        nomes.push(nome)
    }

    Alterar(index, nome){
        nomes[index] = nome
    }

    Deletar(index){
        nomes.splice(index, 1)
    }

}