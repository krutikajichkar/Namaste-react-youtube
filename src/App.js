
import {  createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Error from './components/Error';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';
import SearchResultContainer from './components/SearchResultContainer';




function App() {

  return (
    <div >
      <Header/>
      <Body/>
      
    </div>
  );
}

export const appRouter = createBrowserRouter([{
  path:'/',
  element:<App/>,
  errorElement:<Error/>,
  children:[{
    path:'/',
    element:<MainContainer/>
  },
  {
    path:'watch',
    element:<WatchVideo/>
  },
  {
    path:'results',
    element:<SearchResultContainer/>
  }
]
}])




export default App;
