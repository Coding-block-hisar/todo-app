import React, { Component } from 'react'

export default class Todo extends Component {

constructor()
{
    super();
    this.state={
        tasks:[{task:'check mail',id:1},{task:'buy grocery',id:2},{task:'complete article',id:3}],
        currtask:''
    }
}

change=(e)=>
{
  console.log(e.target.value);
  this.setState({
    currtask:e.target.value
  })
}

handlesubmit=()=>
{
  this.setState({
    tasks:[...this.state.tasks,{task:this.state.currtask,id:this.state.tasks.length+1}]
  })
}

handledelete=(id)=>
{
 let newarr=this.state.tasks.filter((taskobj)=>{
    return taskobj.id!=id
  })
  this.setState({
    tasks:[...newarr]
  })
}
  render() {
    return (
      <div>
        <input type="text" value ={this.state.currtask} onChange={this.change}></input>
        <button onClick={this.handlesubmit}>submit</button>
        {
            this.state.tasks.map((taskobj)=>
            (
                <div key={taskobj.id}>
                <p>{taskobj.task}</p>
                <button onClick={()=>this.handledelete(taskobj.id)}>delete</button>
                </div>
            ))
        }
      </div>
    )
  }
}
