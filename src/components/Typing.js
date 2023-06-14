import React, {Component} from 'react';
import Typed from 'react-typed';
import "./../App.css"

class MyComponent extends Component {
  render() {
      return (
          <div>
              <Typed
                  strings={['Youtuber','Freelancer','Web Developer']}
                  backSpeed={90}
                  typeSpeed={90}
                  loop
                  className='type-text'
              />
              <br/>
          </div>
      );
  }
}

export { MyComponent }