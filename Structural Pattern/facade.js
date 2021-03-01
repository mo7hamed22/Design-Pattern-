/**
 * Facade Pattern
The Facade pattern simplifies and hides the underlying complexity of a large 
abody of code by providing a cleaner and easy to use interface.
 */

class TaskService {
    constructor(data){
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
    }
   
    complete() {
    this.completed = true;
    return`completing task: ${this.name}`;
    }
   
    setCompleteDate() {
    this.completedDate = new Date();
    return `${this.name } completed on ${this.completedDate}`;
    }
   
    notifyCompletion() {
    return `Notifying  ${this.user} 
    of the completion of ${this.name}`;
    }
    save () {
    return`saving Task: ${this.name}`
    }
   }
   //facade work 
class FacadeTask extends TaskService{
    constructor(data)
    {
        super(data)
    }
    completeALLTasksAndNotify()
    {
        
       console.log(  this.complete());
       console.log(    this.setCompleteDate())
       console.log(  this.notifyCompletion())
       console.log(   this.save());
        
    }
}

let mytask = new FacadeTask({
    name: 'Task1',
    priority: 1,
    project: 'Courses',
    user: 'mohamed',
    completed: false
   })
mytask.completeALLTasksAndNotify();