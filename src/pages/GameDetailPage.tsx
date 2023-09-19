import { Box, GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshots from '../components/GameScreenshots';
import GameTrailer from '../components/GameTrailer';
import Game from '../entities/Game';
import useGame from '../Hooks/useGame';

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game = {} as Game, isLoading, error } = useGame(slug!)

  if (isLoading) return <Spinner />

  if (error) throw error

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <Box marginBottom={2}>
          <GameTrailer gameId={game.id}></GameTrailer>
        </Box>
        <GameScreenshots gameId={game.id}></GameScreenshots>
      </GridItem>
    </SimpleGrid>
  )
}

export default GameDetailPage
