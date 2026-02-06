

let TaskList = ({TaskData, onDelete}) => {


    return (
      <>
        {TaskData.map((item, index) => (
          <div className="container mt-3" key={item.taskName}>
            <div className="row g-2 align-items-center">
              <div className="col-md-5">
                <p>{item.taskName}</p>
              </div>
              <div className="col-md-4">
                <p>{item.taskDate}</p>
              </div>
              <div className="col-md-3">
                <button 
                className="btn btn-danger w-100"
                onClick={() => onDelete(index)}
                >Delete Task</button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

export default TaskList;
