import React, { useContext } from 'react'
import Menu from './Menu'
import { Divider } from 'primereact/divider';
import { CardContext } from '../context/allContext'
import { Card, Col, Text, Container, Grid, Row } from "@nextui-org/react";

const FavCharacters = () => {
  const { items } = useContext(CardContext);

  return (
    <>
      <Menu />
      <Divider />
      <Container sm>
        <Grid.Container gap={2} justify="center">
          {items.map((item) => {
            return (
              <Grid xs={6}>
                <Card key={item.id}>
                  <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                      <Text size={20} weight="bold" transform="uppercase" color="black">
                        {item.status}
                      </Text>
                    </Col>
                  </Card.Header>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={item.image}
                      objectFit="cover"
                      width="100%"
                      height={340}
                      alt={item.name}
                    />
                  </Card.Body>
                  <Card.Footer
                    isBlurred
                    css={{
                      position: "absolute",
                      bgBlur: "#ffffff66",
                      borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                      bottom: 0,
                      zIndex: 1,
                    }}
                  >
                    <Row>
                      <Col>
                        <Text color="#000" size={12}>
                          {item.gender}
                        </Text>
                        <Text color="#000" size={12}>
                          {item.type}
                        </Text>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            )
          })}
        </Grid.Container>
      </Container>
    </>
  )
}

export default FavCharacters