import React, { FC, useState } from 'react';
import "./task.css";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { useDispatch } from 'react-redux';
import { store, add } from '../../ReduxStore';


//********************************* */
export interface taskData {
  id: string, task: string, state: any
}
export interface props {
  task: taskData,
}
const Task = () => {
  const [task, settask] = useState('')
  const dispatch = useDispatch();
  console.log(dispatch);

  const AddTask = (e: any) => {
    e.preventDefault()
    dispatch(add({ id: 5, task: task }))
  }

  return (
    <div>
      <div className="add">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="form">
                <form>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Recipient's username" />
                      <div className="input-group-append">
                        <button className="btn btn-info" type="button">Add Task</button>
                      </div>
</div>
                </form>
              </div>
              </div>
              <div className="col-md-3"></div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Task;