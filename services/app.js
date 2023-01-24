const button = document.getElementById('exportarRel');

window.addEventListener("load", () => {
    criaBotoes();
    excluirTarefa();
    marcarTarefa();
});

button.addEventListener("click", () => {
    displayPrint();
    acionarPrint();
});

// Função responsável por alterar e adicionar itens ao display no momento da impressão.
function displayPrint() {
    const date = new Date().toLocaleString();
    var elems = document.getElementsByClassName('fechar');

    document.getElementById('horaDia').innerHTML = date;
    for (let i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
    }
}

// Função responsável por acionar o método de print, gerando uma tela de pré-visualização.
function acionarPrint() {
    var conteudo = document.getElementById('print').innerHTML;
    var tela_impressao = window.open("", "new div", "height=600,width=800");

    tela_impressao.document.write("<html><head><title></title>");
    tela_impressao.document.write("<link rel=\"stylesheet\" href=\"../public/css/style.css\" type=\"text/css\"/>");
    tela_impressao.document.write("</head><body>");
    tela_impressao.document.write(conteudo);
    tela_impressao.document.write("</body></html>");
    tela_impressao.document.close();
    tela_impressao.focus();
    setTimeout(function(){tela_impressao.print();},1000);
}

// Função responsável por criar os botões para excluir um item da lista de tarefas.
function criaBotoes() {
    const myNodelist = document.querySelectorAll("li");

    myNodelist.forEach((_, index) => {
        let span = document.createElement("span");
        let iconeDelete = document.createTextNode("X");
        
        span.className = "fechar";
        span.appendChild(iconeDelete);
        myNodelist[index].appendChild(span);
    });
}

// Função responsável por excluir a tarefa da lista.
function excluirTarefa() {
    const buttonFechar = document.querySelectorAll(".fechar");

    buttonFechar.forEach((_, index) => {
    buttonFechar[index].onclick = function() {
        const div = this.parentElement;

        div.style.display = "none";
    };
    });
}

// Função responsável por marcar/desmarcar a tarefa como feita quando clicar em algum item da lista.
function marcarTarefa() {
    const todoList = document.querySelector("ul");

    todoList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    });
}


//Função responsável por criar uma nova tarefa na lista de tarefas quando clicar no botão Adicionar.
function addNewTodo(event) {
    const li = document.createElement("li");
    const inputTodo = document.getElementById("inputTodo").value;
    const span = document.createElement("SPAN");
    const iconeDelete = document.createTextNode("X");
    var tarefa = document.createTextNode(inputTodo);

    li.appendChild(tarefa);
    if (event && event.keyCode !== 13) {
        return;
    }
    
    document.getElementById("ulTodo").appendChild(li);
    document.getElementById("inputTodo").value = "";
    span.className = "fechar";
    span.appendChild(iconeDelete);
    li.setAttribute('id', 1);
    li.appendChild(span);

    span.onclick = function () {
        const div = this.parentElement;

        div.style.display = "none";
    };
}