import React, { memo } from 'react';

import { Button, Image } from '../components';

function Home() {
  return (
    <div>
      <Image />
      <Button />
    </div>
  );
}

export default memo(Home);
