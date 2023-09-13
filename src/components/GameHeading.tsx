import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGenres from "../Hooks/useGenres"
import usePlatforms from "../Hooks/usePlatforms"
import usePlatform from "../Hooks/usePlatform"
import useGenre from "../Hooks/useGenre"

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
   const genre = useGenre(gameQuery.genreId)

  const platform =  usePlatform(gameQuery.platformId)

  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games `

  return (
    <Heading fontSize={"5xl"} marginBottom={5} as="h1">
      {heading}
    </Heading>
  )
}

export default GameHeading
