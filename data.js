/* Owner-editable content. Personal memories must be true or clearly marked as samples.
   Image URLs in this demo use publicly reachable Wikimedia image links.
   Replace with owner-approved local assets in ./assets/ when desired. */
window.KPOP_DATA = {
  artists: [
    {
      id: 'nmixx',
      name: 'NMIXX',
      subtitle: 'A universe of surprises',
      bias: 'Haewon · Bae',
      note: '喜歡充滿變化的音樂風格，以及每次都讓人期待的舞台。',
      colors: ['#9e8af2', '#f9bad6'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Nmixx_in_Frankfurt_20260324_%281%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      photoAlt: 'NMIXX 團體照'
    },
    {
      id: 'itzy',
      name: 'ITZY',
      subtitle: 'Born to be confident',
      bias: 'Yeji',
      note: '充滿能量的舞台表現，是我的靈感來源之一。',
      colors: ['#f3a9cc', '#b8a7ff'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/251110_ITZY.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      photoAlt: 'ITZY 團體照'
    },
    {
      id: 'twice',
      name: 'TWICE',
      subtitle: 'Feel special',
      bias: 'Sana',
      note: '明亮又溫暖的歌曲，總能讓日常多一點好心情。',
      colors: ['#f7c5c9', '#d2b8f5'],
      photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Twice_260618.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      photoAlt: 'TWICE 團體照'
    }
  ],
  songs: [
    {
      id: 'nmixx-dash',
      title: 'DASH',
      artistId: 'nmixx',
      type: 'Song',
      album: 'Fe3O4: Break',
      mood: 'Energy boost',
      url: 'https://www.youtube.com/watch?v=7UecFm_bSTU',
      cover: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Nmixx_Fe3O4_Break.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      coverAlt: 'Fe3O4: Break 專輯封面'
    },
    {
      id: 'nmixx-love-me-like-this',
      title: 'Love Me Like This',
      artistId: 'nmixx',
      type: 'Song',
      album: 'Expérgo',
      mood: 'Feel good',
      url: 'https://www.youtube.com/watch?v=EDnwWcFpObo',
      cover: 'https://upload.wikimedia.org/wikipedia/en/5/54/Nmixx_-_Exp%C3%A9rgo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      coverAlt: 'Expérgo 專輯封面'
    },
    {
      id: 'itzy-wannabe',
      title: 'WANNABE',
      artistId: 'itzy',
      type: 'Song',
      album: "It'z Me",
      mood: 'Confidence',
      url: 'https://www.youtube.com/watch?v=fE2h3lGlOsk',
      cover: 'https://upload.wikimedia.org/wikipedia/en/6/62/Itz_me_-_wannabe_ver.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      coverAlt: "It'z Me 專輯封面"
    },
    {
      id: 'itzy-untouchable',
      title: 'UNTOUCHABLE',
      artistId: 'itzy',
      type: 'Song',
      album: 'Born to Be',
      mood: 'Power',
      url: 'https://www.youtube.com/watch?v=5e3rKInegeU',
      cover: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Itzy_-_Born_to_Be_%28digital%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      coverAlt: 'Born to Be 專輯封面'
    },
    {
      id: 'twice-feel-special',
      title: 'Feel Special',
      artistId: 'twice',
      type: 'Song',
      album: 'Feel Special',
      mood: 'Comfort',
      url: 'https://www.youtube.com/watch?v=3ymwOvzhwHs',
      cover: 'https://upload.wikimedia.org/wikipedia/en/3/33/Twice_-_Feel_Special.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      coverAlt: 'Feel Special 專輯封面'
    },
    {
      id: 'twice-fancy',
      title: 'FANCY',
      artistId: 'twice',
      type: 'Song',
      album: 'Fancy You',
      mood: 'Sweet sparkle',
      url: 'https://www.youtube.com/watch?v=kOHB85vDuow',
      cover: 'https://upload.wikimedia.org/wikipedia/en/0/09/Twice_-_Fancy_You.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      coverAlt: 'Fancy You 專輯封面'
    }
  ],
  memories: [
    {
      id: 'nmixx-stage', title: 'On stage, in my heart', artist: 'NMIXX',
      detail: '每次重看舞台，都會發現新的精彩細節。', kind: 'STAGE MOMENT',
      photo: 'https://img.youtube.com/vi/7UecFm_bSTU/hqdefault.jpg',
      photoAlt: 'NMIXX DASH 官方 MV 畫面', url: 'https://www.youtube.com/watch?v=7UecFm_bSTU'
    },
    {
      id: 'itzy-stage', title: 'Born to shine', artist: 'ITZY',
      detail: '每一個俐落的舞蹈動作，都充滿自信與能量。', kind: 'PERFORMANCE',
      photo: 'https://img.youtube.com/vi/fE2h3lGlOsk/hqdefault.jpg',
      photoAlt: 'ITZY WANNABE 官方 MV 畫面', url: 'https://www.youtube.com/watch?v=fE2h3lGlOsk'
    },
    {
      id: 'twice-stage', title: 'You make me feel special', artist: 'TWICE',
      detail: '把溫暖又閃亮的音樂片刻收進收藏冊。', kind: 'FAVORITE ERA',
      photo: 'https://img.youtube.com/vi/3ymwOvzhwHs/hqdefault.jpg',
      photoAlt: 'TWICE Feel Special 官方 MV 畫面', url: 'https://www.youtube.com/watch?v=3ymwOvzhwHs'
    },
    {
      id: 'nmixx-love', title: 'Love Me Like This', artist: 'NMIXX',
      detail: '可以一直循環播放、跟著唱的最愛歌曲之一。', kind: 'ON REPEAT',
      photo: 'https://img.youtube.com/vi/EDnwWcFpObo/hqdefault.jpg',
      photoAlt: 'NMIXX Love Me Like This 官方 MV 畫面', url: 'https://www.youtube.com/watch?v=EDnwWcFpObo'
    }
  ]
};
