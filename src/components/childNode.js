import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import './app.scss';

const SortableItem = SortableElement((props) =>{
  return(
      <div className="childNode">{props.value}</div>
    )
  }
  
);


const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value}/>
      ))}
    </ul>
  );
});


export default class ChildNode extends Component{
  constructor(props){
    super(props);
    this.state ={items:props.child,childClass:props.childClass};
  }
  componentWillReceiveProps(props){
    this.setState({
      items:props.child
    })
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
 render() {
  const {items,childClass} = this.state; 
    return(
      <div className="childNode">
        <SortableList items={items} onSortEnd={this.onSortEnd} />
      </div>
    ) ;
  }
};