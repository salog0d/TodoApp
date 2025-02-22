import { MdDelete } from "react-icons/md";

const Todo = () => {
    return (
        <div className="todo">
        <div className="todo-container">
            <input type="checkbox" className="checkbox"/>
            <h3 className="todo-text">Todo</h3>
            <MdDelete size='25px'/>
        </div>
        </div>
    );
    }
    
    export default Todo;