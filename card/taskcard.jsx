
import {Trash2} from 'lucide-react';
import "./taskcard.css";
  function taskCard({task}){
  return <div classname="task-card">
    {task}
    <Trash2 classname="icon-delete"/>
    </div>
  }