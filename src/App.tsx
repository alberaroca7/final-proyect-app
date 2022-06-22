import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import ViewMessage from './pages/ViewMessage/ViewMessage';
import Validate from './pages/auth/validate';
import Register from './pages/auth/register';
import Login from './pages/auth/login'
import User from './pages/user';
import RequireAuth from './core/auth/auth.component';
import NotFoundPage from './pages/NotFoundPage';
import { Header } from './components/header';
import { Footer } from './components/footer';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';



setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <Header></Header>
      <IonRouterOutlet>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/message/:id">
          <ViewMessage />
        </Route>
        <Route exact path="/validate">
          <Validate />
        </Route>
        <Route exact path="/user">
          <RequireAuth>
            <User />
          </RequireAuth>
        </Route>
        <Route path="/auth/register">
          <Register />
        </Route>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </IonRouterOutlet>
      <Footer></Footer>
    </IonReactRouter>
  </IonApp>
);

export default App;
