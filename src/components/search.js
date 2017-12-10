import React, {Component} from 'react';
import ParentNode from './parentNode';
import './app.scss';
export default class Search extends Component{
	constructor(props){
		super(props);
		this.state={
						data:'',
						result:'',
						parent: ['child1','child2','child3','child4'],
				    	child:[['child11','child12'],['child21','child22','child23'],['child31','child32','child33'],['child41','child42','child43']],
				    	parent_new: [],
				    	child_new:[[],[]]
					};
		this.updateState = this.updateState.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.resetActivity = this.resetActivity.bind(this);
	}
	componentWillMount(){
		this.setState({
			parent_new:this.state.parent,
			child_new:this.state.child
		})
	}
	updateState(event){
		this.setState({data:event.target.value});
	}
	handleFormSubmit = formSubmitEvent => {
			const {parent,child}=this.state;
			let {data} = this.state;
    		formSubmitEvent.preventDefault();
    		data = data.toLowerCase();
    		let index = parent.indexOf(data);
    		if(data.length===0){
    			return(
    				this.setState({
	    				result:'Please provide input to find the require node'
    					})
    				)
    		}
    		if(index>-1){
    			this.setState({
	    			parent_new: parent.slice(index,index+1),
	    			child_new: child.slice(index,index+1),
	    			result:''
    			})
    		}else{
    			this.setState({
    				parent_new:[],
    				child_new:[],
    				result:'No search result is found'
    			})
    		}

  	}
  	resetActivity(){
  		const {data,parent,child,parent_new,child_new}=this.state;
  		this.setState({
  			parent_new:parent,
  			child_new:child
  		})
  	}
	render(){
		const {data,parent_new,child_new,result}=this.state;
		return(
			<div>
				<form onSubmit={this.handleFormSubmit}>
					<input type = "text" value = {data} 
	               	onChange = {this.updateState} placeholder="Enter parent node"/>
	               	<button type='submit'>Submit</button>
	               	<button type='reset' onClick={this.resetActivity}>Reset</button>
	            </form>
	            <h1>{result}</h1>
            	<ParentNode parent={parent_new} child={child_new}/>
            </div> 
			)
	}
}