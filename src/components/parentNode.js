import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import ChildNode from './childNode';
import Search from './search';
import './app.scss';


const SortableItem = SortableElement((props) =>{
	const {child,newIndex,oldIndex,classVal} = props;
	return(
		<div className="parentNode">
			<div>{props.value}</div>
			<ChildNode child={child}/>
  		</div>	
		)
	}
  
);


const SortableList = SortableContainer((props) => {	
	const {items,child,oldIndex,newIndex,classVal} = props;
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} child={child[index]} classVal={classVal} />
      ))}
    </ul>
  );
}); 


export default class ParentNode extends Component {
	constructor(props){
		super(props);
		this.state={
					parent: props.parent,
				    child: props.child
				}		
				
	}
	componentWillReceiveProps(props){
		this.setState({
			parent: props.parent,
			child: props.child
		})
	}	
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      parent: arrayMove(this.state.parent, oldIndex, newIndex),
      child: arrayMove(this.state.child, oldIndex, newIndex)
    });
  };
  render() {
    return(
    	<ul>
    		<div className='root'>Root</div>
    		<SortableList items={this.state.parent} onSortEnd={this.onSortEnd} child={this.state.child} classVal={this.state.class}/>
    	</ul>
    ) ;
  }
};

