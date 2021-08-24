import React from 'react'

class Comp1 extends React.Component {
  
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            commentsUser :[]
        }
        this.myRef = React.createRef()
    }

    addCount = () => {
        let currentCount = this.state.count;
        currentCount++;
        this.setState({
            count : currentCount
            
        })
            
    }
    
    addComment = () => {
     let comment = this.myRef.current.value;
     const comments = this.state.commentsUser;
     comments.push(comment)
     this.setState({
         commentsUser : comments
     })
    this.myRef.current.value = ""
    
    }

    render(){
        return(   
            <div>
                <h1>State</h1>
                <div>{this.state.count}</div>
                <button type = "button" onClick = {this.addCount}>Add Count</button>
                <h1>Comments</h1>
                <textarea ref = {this.myRef}></textarea>
                <button type= "button" onClick = {this.addComment} > Add Comment</button>
                <ul> {this.state.commentsUser.map((item,index) => {
                    return <li key = {index.toString()}>{item}</li>
                })
                     
    
                    
                } </ul>
            </div>
        )
    }



}
export default Comp1