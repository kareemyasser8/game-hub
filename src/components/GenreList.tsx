import { Button, Heading, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';

import useGenres from '../Hooks/useGenres';
import { Genre } from "../entities/Genre";
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
  const { data, error, isLoading} = useGenres()
  const selectedGenreId = useGameQueryStore(s=>s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s=> s.setGenreId);

  if (error) return null

  if (isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize='2xl' marginBottom={2}>Genres</Heading>
      <List>
        {data?.results.map((genre: Genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="35px"
                objectFit='cover'
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign= "left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => {
                  setSelectedGenreId(genre.id)
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
