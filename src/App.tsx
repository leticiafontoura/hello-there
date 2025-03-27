import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router'
import Header from './shared/ui/Header/Header'
import RoutesComponent from './Routes'
import './App.scss'
import Breadcrumbs from './shared/components/Breadcrumbs/Breadcrumbs'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnMount: false,
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/hello-there">
          <Header />
          <Breadcrumbs />
          <RoutesComponent />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
