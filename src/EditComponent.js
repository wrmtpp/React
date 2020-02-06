import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const newname = this.getName.value; //getName
        const newmessage = this.getMessage.value; //getMessage
        //Edit data Object
        const data = {
            newname,
            newmessage,
        }

        this.props.dispatch({
            type: 'UPDATE',
            id: this.props.comment.id,
            data: data
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="Name" ref={(input) => this.getName = input} defaultValue={this.props.comment.name} /><br /><br />
                    <textarea required rows="5" cols="28" placeholder="The message" ref={(input) => this.getMessage = input} defaultValue={this.props.comment.message} /><br /><br />
                    <button class="btn btn-success">Update</button>
                </form>
            </div>
        )
    }

}

export default connect()(EditComponent);
