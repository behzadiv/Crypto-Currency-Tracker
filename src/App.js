import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import SearchProvider from "./provider/SearchProvider";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchProvider>
          <Layout>
            <Switch>
              {routes.map((route) => {
                return <Route {...route} />;
              })}
            </Switch>
          </Layout>
        </SearchProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
