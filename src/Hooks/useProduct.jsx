import { useQuery } from '@tanstack/react-query'

const useProduct = () => {
    const fetchProduct = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        return data
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProduct,
    })

    return { data, isLoading, isError, error }
}

export default useProduct
