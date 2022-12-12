import { AuthProvider } from './context/auth';
import { BrowserRouter } from 'react-router-dom';
import Index from './screens/Index';

const App: React.FC = () => {

    return (
      <BrowserRouter>
        <AuthProvider>
          <Index/>
        </AuthProvider>
      </BrowserRouter>
    )
}

export default App
