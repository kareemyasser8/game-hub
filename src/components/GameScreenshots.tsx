import React from "react"
import useScreenShots from "../Hooks/useScreenshots"
import { SimpleGrid, Image} from "@chakra-ui/react";

interface Props {
  gameId: number
}

const GameScreenshots = ({ gameId }: Props) => {
  const {data, isLoading, error}  = useScreenShots(gameId);
  
  if(isLoading) return null;
  if(error) throw error
  
  return <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
    {data?.results.map(file=>
     <Image key={file.id} src={file.image}/>
    )}
  </SimpleGrid>
}

export default GameScreenshots
