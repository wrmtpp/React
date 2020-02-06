import React,{Component } from 'react';
import {connect} from 'react-redux';

class CommentForm extends Component {
    handleSubmit = (e) =>{
        e.preventDefault();
        const name = this.getName.value; //getName
        const message = this.getMessage.value; //getMessage
        //Object
        const data = {
            id: new Date(),
            name,
            message,
            editing:false
        }
        this.props.dispatch({
            type:'ADD_COMMENT',
            data
        })

        this.getName.value=""
        this.getMessage.value=""
        //console.log(data)
    }

    render() {
        return (
          <div>
            <h1>Add Your Message.</h1>
            <form onSubmit={this.handleSubmit}>
                <input required type="text" placeholder="Name" ref={(input) => this.getName = input} /><br /><br />
                <textarea required rows="5" cols="50" placeholder="The message" ref={(input) => this.getMessage = input} /><br /><br />
                <button class="btn btn-primary">Add</button>

            </form>
          </div>
        )
      }

}

export default connect()(CommentForm);
