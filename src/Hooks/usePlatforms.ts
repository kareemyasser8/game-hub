import { useQuery } from "@tanstack/react-query"
import { FetchDataResponse }  from './../services/api-client';
import apiClient from "../services/api-client"

interface Platform {
  id: number
  name: string
  slug: string
}

const fetchPlatforms = () =>
  apiClient
    .get<FetchDataResponse<Platform>>("/platforms/lists/parents")
    .then((res) => res.data)

const usePlatforms = () =>
  useQuery<FetchDataResponse<Platform>,Error>({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000,
  })

export default usePlatforms
