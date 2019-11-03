import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Todat at 6:00PM" 
          content="Nice blog post!" 
          avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          timeAgo="Yesterday at 7:00PM" 
          content="I like the subject" 
          avatar={faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

// semantic-ui.com