import React from 'react';
import Card from 'lib/Card';
import styled from 'styled-components/macro';

const ThinnerCard = styled(Card)`
width: 400px;`

export const App = () => {
  return (
    <>
      <ThinnerCard
        coverImage="https://www.fillmurray.com/g/500/300"
        thumbnailUrl="https://www.fillmurray.com/100/100"
        title="This is the title"
        secondaryText="This is the secondary text">
        child content here
      </ThinnerCard>
      <Card
        title="This is the title"
        secondaryText="This is the secondary text" />
      <Card>
        <h1>Hello children</h1>
      </Card>
    </>
  )
}
