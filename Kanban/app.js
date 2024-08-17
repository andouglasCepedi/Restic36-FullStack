"use strict";
//Classe Task
class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}
//Classe column
class Column {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.tasks = []; //Tasks da coluna
    }
    //Método para adicionar uma nova task a coluna
    addTask(task) {
        this.tasks.push(task);
        this.render();
    }
    //Método para remover uma task da coluna
    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.render();
    }
    //Método para mover uma task de uma coluna para outra
    moveTask(taskId, targetColumn) {
        const taskIndex = this.tasks.findIndex(task => task.id === taskId); //Verifica se existe a id da task entre as tasks da coluna
        if (taskIndex > -1) {
            const [task] = this.tasks.splice(taskIndex, 1); //Exclui e retorna o elemento excluído
            targetColumn.addTask(task); //Adiciona o elemento excluído na nova coluna (target)
            this.removeTask(taskIndex); //Remove a task da coluna atual e renderiza
        }
    }
    //Método para atualizar o html
    render() {
        const listElement = document.getElementById(`${this.id}-list`); //Pega o elemento ul da coluna na página HTML
        listElement.innerHTML = ''; //Apaga todos os itens
        this.tasks.forEach(task => {
            const listItem = document.createElement('li'); //Cria um novo elemento li
            listItem.textContent = task.title; //Adiciona o título ao elemento li criado
            listItem.onclick = () => {
                const targetColumnId = prompt('Mover para (todo, in-progress, done):'); //Mostra o prompt e retorna o valor para a constante
                if (targetColumnId && targetColumnId !== this.id) { //Se um valor foi repassado e ele não é igual ao da própria coluna
                    const targetColumn = columns[targetColumnId]; //Encontra a coluna que receberá a task
                    if (targetColumn) { //Se a coluna existe
                        this.moveTask(task.id, targetColumn); //Move a task
                    }
                }
            };
            listElement.appendChild(listItem); //Adiciona o li ao ul da página thml
        });
    }
}
//Colunas do quadro
//Tipo de índice (ou de objeto indexado). Define a forma do objeto 'columns' como um dicionário.
//A relação chave-valor é dado por [key:string], ou seja, uma chave do tipo string e o valor associado é do tipo Column 
const columns = {
    todo: new Column('todo', 'A Fazer'),
    inprogress: new Column('in-progress', 'Em Progresso'),
    done: new Column('done', 'Concluídas'),
};
//Função associada ao botão
function addTask(columnId) {
    const title = prompt('Título da Tarefa:');
    if (title) {
        const column = columns[columnId];
        if (column) {
            const taskId = Date.now(); // Usa o timestamp como ID único
            const task = new Task(taskId, title);
            column.addTask(task);
        }
    }
}
// Renderiza as colunas na inicialização
Object.values(columns).forEach(column => column.render());
