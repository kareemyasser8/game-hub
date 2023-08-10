import { HStack, List, ListItem , Image, Text, Spinner} from "@chakra-ui/react"
import useGenres, { Genre } from "../Hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

const GenreList = () => {
  const { data, isLoading, error } = useGenres()

  if(error) return null;

  if(isLoading) return <Spinner/>

  return (
    <>
      <List>
        {data.map((genre: Genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
              <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
