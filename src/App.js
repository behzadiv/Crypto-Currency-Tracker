import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Layout>
           <Switch>
            {routes.map((route)=>{
                return <Route {...route}/>
              })}
           </Switch>
         </Layout>       
      </BrowserRouter>
    </div>
  );
}

export default App;
