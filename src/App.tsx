import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router'
import Header from './shared/ui/Header/Header'
import RoutesComponent from './Routes'
import './App.scss'

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <RoutesComponent />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
