import React, { memo } from 'react';

import Button from '@components/Button';
import Image from '@components/Image';

function Home() {
  return (
    <div>
      <Image />
      <Button />
    </div>
  );
}

export default memo(Home);
