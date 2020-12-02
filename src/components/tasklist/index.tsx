import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
// import { uuid } from 'uuidv4';
import { pin , remove, add } from "../../ReduxStore";
// import Task from '../tasks';
import shortid from 'shortid'
// import shortid from  'shortid'
import './style.css';
interface task {
    id: string;
    check: boolean,
    task: string;
    status: string;
    state: "TASK_INBOX" | "TASK_ARCHIVED" | "TASK_PINNED";
}

function TaskListPage() {
    const [task, settask] = useState('')
    const dispatch = useDispatch();
    const Task = useSelector((state: task[]) => state);
    const [taskdata, settaskData] = useState({})


    useEffect(() => {
        settaskData(
            Task.map(d => {
                return {
                    check: false,
                    id: d.id,
                    status: d.status,
                    task: d.task
                  
                };
            })
        );
    }, [Task])


    function onPinTask(id: string) {
        console.log(id);

        dispatch(pin({ id: id }))


    }


    function onUnpinTask(id: string) {
        dispatch(remove({ id: id }));
    }

    const AddTask = (e: any) => {
        e.preventDefault()
        let shortids = shortid()
        let value = {
            id: shortids ,
            task: task,
            status: "pendding",

        }
        dispatch(add(value))
        setTimeout(() => {
            settask("")
            
        }, 2000);
    }

    return (
    
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="card px-3">
                            <div className="card-body">
                                <h4 className="card-title">Awesome Task Box</h4>
                                <div className="add-items d-flex">
                                     <input type="text" className="form-control todo-list-input" value={task} onChange={(e) => settask(e.currentTarget.value)} placeholder="What do you need to do today?" /> 
                                     <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={AddTask}>Add</button> </div>
                                <div className="list-wrapper">
                                    {
                                        Task.map((item, index: number) => {
                                            return (
                                                <ul className="d-flex flex-column-reverse todo-list" key={index}>
                                                    <li >
                                                        <div className="form-check"> 
                                                        <label className="form-check-label">
                                                            <input className="checkbox" type="checkbox" onClick={() => onPinTask(item.id)} />
                                                            <i className="input-helper" />
                                                            
                                                            <div className={item.status === "complete" ? "completed" :"widget-content-left"} >
                                                                <div className="widget-heading">{item.task}<div className={item.status === "complete" ? "badge badge-success ml-2" : "badge badge-info ml-2"}>{item.status === "complete" ? "complete" : "pendding"}  </div>
                                                                </div>
                                                            </div>
                                                                <div className="widget-subheading"><i>By laher asif</i></div>
                                                        </label>

                                                        </div>
                                                        <i className="remove mdi mdi-close-circle-outline" onClick={() => onUnpinTask(item.id)}/>
                                                        
                                                        
                                                    </li>

                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>

                </div>
            </div>
        </div>

    )
}
export default TaskListPage