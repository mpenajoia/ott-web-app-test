import React from 'react';
import { render } from '@testing-library/react';

import Video from './Video';

describe('<Video>', () => {
  test('renders and matches snapshot', () => {
    const { container } = render(
      <Video
        title="Test video"
        description="Video description"
        videoMeta="Video meta"
        poster="posterimage"
        posterMode="fading"
        hasShared={false}
        onShareClick={vi.fn()}
        enableSharing
        isFavorite={false}
        isFavoritesEnabled={true}
        onFavoriteButtonClick={vi.fn()}
        playTrailer={false}
        onTrailerClick={vi.fn()}
        onTrailerClose={vi.fn()}
        startWatchingButton={<button>Start watching</button>}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
