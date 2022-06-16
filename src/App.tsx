import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import Validate from './pages/auth/validate';
import Register from './pages/auth/register';
import Login from './pages/auth/login'
import User from './pages/user';
// import RequireAuth from './core/auth/auth.component';

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
      <IonRouterOutlet>
        <Route path="/" exact={true}> <Redirect to="/home" /> </Route>
        <Route path="/home" exact={true} component={Home}> </Route>
        <Route path="/validate" exact={true} component={Validate}> </Route>
        <Route path="/user" exact={true} component={User}> </Route>
        <Route path="/auth" exact={true} >
          <Route path="/register" exact={true} component={Register}> </Route>
          <Route path="/login" exact={true} component={Login}> </Route>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
