import { AuthProvider } from './context/auth';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Index from './screens/Index';

const App: React.FC = () => {

    return (
      <HashRouter>
        <AuthProvider>
          <Index/>
        </AuthProvider>
      </HashRouter>
    )
}

export default App
