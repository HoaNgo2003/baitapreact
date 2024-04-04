import './App.css';
 
import {  Route, Router } from 'react-router-dom';
import AppLayout from './AppLayout/AppLayout';
 
export const BlogPosts = {
  'first-blog-post' :{
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.'
  },
  'second-blog-post': {
    title: 'Second Blog Post',
    description: 'Hello React Router v6'
    }
   
};
function App() {
  return (
   
     <>
     
  <AppLayout/>
     
     </>
    
    
   );
  }
export default App;

 
