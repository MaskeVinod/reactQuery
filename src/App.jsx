import './App.css'
import useProduct from './Hooks/useProduct'

function App() {
  const { data, isLoading, isError, error } = useProduct()

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <div >
        {
          data.map((product) => (
            <div className="card">
              <div className="card-content" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3 className='card-title'>{product.title}</h3>
                <p className='card-description'>{product.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
