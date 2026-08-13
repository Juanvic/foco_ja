import GerenciadorDeTarefas from '../components/GerenciadorDeTarefas';
import '../styles/Todo.css'

export function Todo() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="intro ">
            <h1>Comece agora 🎯</h1>
            <p>Clique no botão <strong>+</strong> para começar</p>
            <div>
              <div className="border1"></div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="textoAjuda col-12">
            <p id="first">
              {/* Enter text into the input field to add items to your list. */}
              Digite no campo de texto para adicionar itens a sua lista.
            </p>
            <p id="second">Clique no item para marcá-lo como concluido.</p>
            <p id="third">Clique no "X" para remover um item da sua lista.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <input
              id="userInput"
              type="text"
              placeholder="Novo item..."
              maxlength="27"
            />
            <button id="enter">
              <i className="fas fa-pencil-alt"></i>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="listItems col-12">
            <ul className="col-12 offset-0 col-sm-8 offset-sm-2"></ul>
          </div>
        </div>
      </div>
      
    </>
    
  );
}

export default Todo;
