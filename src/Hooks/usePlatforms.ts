import { useQuery } from "@tanstack/react-query"
import APIClient, { FetchResponse }  from './../services/api-client';
import ms from "ms";

export interface Platform {
  id: number
  name: string
  slug: string
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>,Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  })

export default usePlatforms
