import React, {Component} from 'react'
import './bookshelf.css'

class Bookshelf extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
          <tr>
            <td data-label={this.props.bookNameTitle !== undefined ? this.props.bookNameTitle : 'Book Name'}><a id="book-link" href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.bookNameTitle}</a></td>
          </tr>
    )
  }
}

export default Bookshelf
