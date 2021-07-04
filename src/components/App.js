import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import routers from "../routers/routers";
import "./App.scss";
import Layout from "./layout/Layout";
import Loader from "./loader/Loader";

function App() {
  return (
    <div>
      <Layout>
        <div className="App">
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route
                path={routers.main}
                exact
                component={lazy(() => import("./pages/mainPage/MainPage"))}
              />
              <Route
                path={routers.afterRenovation}
                exact
                component={lazy(() =>
                  import("./pages//aftrRenovation/Afterrenovation")
                )}
              />
              <Route
                path={routers.spriningCleaning}
                exact
                component={lazy(() =>
                  import("./pages/spriningCleaning/SpsiningCleaning")
                )}
              />
              <Route
                path={routers.regularCleaning}
                exact
                component={lazy(() =>
                  import("./pages/regularCleaning/RegularCleaning")
                )}
              />
              <Route
                path={routers.eyeWash}
                exact
                component={lazy(() => import("./pages/eyeWash/EyeWash"))}
              />
            </Switch>
          </Suspense>
        </div>
      </Layout>
    </div>
  );
}

export default App;
