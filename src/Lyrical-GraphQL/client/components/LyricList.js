import React, {Component} from 'react';

class LyricList extends Component {
  render() {
    return (
      <div>
        <h6>Lyric list</h6>
        <ul className="collection">
          {this.props.lyrics.map(({id, content}) => (
            <li className="collection-item" key={id}>{content}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LyricList;
