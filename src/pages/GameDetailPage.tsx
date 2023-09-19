import React from "react"
import { useParams } from "react-router-dom"
import useGame from "../Hooks/useGame"
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import ExpandableText from "../components/ExpandableText"
import { Game } from "../entities/Game"
import DefinitionItem from "../components/DefinitionItem"
import CriticScore from "../components/CriticScore"
import GameAttributes from "../components/GameAttributes"

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game = {} as Game, isLoading, error } = useGame(slug!)

  if (isLoading) return <Spinner />

  if (error) throw error

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game}/>
    </>
  )
}

export default GameDetailPage
