import React, {Component} from 'react';

class Fave extends Component {
   // state ={
   //    isFave: false
   //  }


handleClick(e) {
  e.stopPropagation()
  console.log('Handling Fave click!')

  this.props.onFaveToggle(this.props.listings)
}


  render() {
    console.log(this.props.isFave)
    const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'

    return (
      <div
      className={`film-row-fave ${isFave}`}
      onClick={(e) => this.handleClick(e)}
      >
  <p className="material-icons">add_to_queue</p>

</div>
      )
  }
}
export default Fave;
