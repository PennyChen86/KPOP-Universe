'use strict';

const data = window.KPOP_DATA || { artists: [], songs: [], memories: [] };
const byId = id => document.getElementById(id);
const node = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
};

function renderArtists() {
  const grid = byId('artist-grid');
  grid.replaceChildren();

  for (const artist of data.artists) {
    const card = node('article', 'artist-card');
    const cover = node('div', 'artist-cover');
    const colors = Array.isArray(artist.colors) && artist.colors.length === 2 ? artist.colors : ['#9e8af2', '#f9bad6'];
    cover.style.background = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;

    if (artist.photo) {
      cover.classList.add('has-photo');
      const img = node('img');
      img.src = artist.photo;
      img.alt = artist.photoAlt || `${artist.name} 團體照`;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.addEventListener('error', () => {
        cover.classList.remove('has-photo');
        img.remove();
      });
      cover.append(img);
    }

    cover.append(node('b', '', artist.name), node('span', 'cover-star', '✧'));

    const body = node('div', 'artist-card-body');
    body.append(
      node('span', 'artist-label', 'MY FAVORITE STAR'),
      node('h3', '', artist.name),
      node('p', 'subtitle', artist.subtitle),
      node('p', 'note', artist.note),
      node('span', 'bias-tag', `♡ Bias: ${artist.bias || '—'}`)
    );

    card.append(cover, body);
    grid.append(card);
  }

  byId('artist-count').textContent = String(data.artists.length).padStart(2, '0');
}

const FAVORITES_KEY = 'kpop-universe-song-favorites-v1';
function readFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(FAVORITES_KEY));
    return Array.isArray(saved) ? new Set(saved.filter(id => typeof id === 'string')) : new Set();
  } catch { return new Set(); }
}
let favoriteSongIds = readFavorites();
let showFavoritesOnly = false;
function saveFavorites() {
  try { localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favoriteSongIds])); }
  catch { /* Browsing still works even if storage is blocked. */ }
}
function setupMusic() {
  const select = byId('artist-filter');
  data.artists.forEach(artist => {
    const opt = node('option', '', artist.name);
    opt.value = artist.id;
    select.append(opt);
  });
  const allButton = byId('show-all-songs');
  const favoritesButton = byId('show-favorite-songs');
  const render = () => {
    const query = byId('music-search').value.trim().toLocaleLowerCase();
    const artistId = select.value;
    const list = byId('music-list');
    list.replaceChildren();
    byId('favorite-count').textContent = String(favoriteSongIds.size);
    allButton.classList.toggle('active', !showFavoritesOnly);
    favoritesButton.classList.toggle('active', showFavoritesOnly);
    allButton.setAttribute('aria-pressed', String(!showFavoritesOnly));
    favoritesButton.setAttribute('aria-pressed', String(showFavoritesOnly));

    const songs = data.songs.filter(song => {
      const artist = data.artists.find(a => a.id === song.artistId);
      const haystack = [song.title, song.album || '', song.mood, song.type, artist?.name || ''].join(' ').toLocaleLowerCase();
      return (artistId === 'all' || song.artistId === artistId)
        && (!showFavoritesOnly || favoriteSongIds.has(song.id)) && haystack.includes(query);
    });
    if (!songs.length) {
      list.append(node('p', 'empty-state', showFavoritesOnly ? '還沒有符合條件的收藏 ♡ 點歌曲旁的愛心就能加入！' : '找不到符合的歌曲 ✧ 試試其他關鍵字吧！'));
      return;
    }
    songs.forEach(song => {
      const artist = data.artists.find(a => a.id === song.artistId);
      const row = node('article', 'music-row');
      if (song.cover) {
        const cover = node('img', 'song-cover');
        cover.src = song.cover;
        cover.alt = song.coverAlt || `${song.title} 專輯封面`;
        cover.loading = 'lazy'; cover.decoding = 'async';
        cover.addEventListener('error', () => { cover.remove(); row.classList.add('no-cover'); });
        row.append(cover);
      } else row.classList.add('no-cover');

      const copy = node('div', 'song-copy');
      copy.append(node('strong', '', song.title),
        node('small', '', `${artist?.name || 'Unknown'} · ${song.album || song.type}`));
      const actions = node('div', 'song-actions');
      const favorite = node('button', 'song-favorite' + (favoriteSongIds.has(song.id) ? ' is-favorite' : ''), favoriteSongIds.has(song.id) ? '♥' : '♡');
      favorite.type = 'button';
      favorite.setAttribute('aria-label', `${favoriteSongIds.has(song.id) ? '取消收藏' : '收藏'} ${song.title}`);
      favorite.setAttribute('aria-pressed', String(favoriteSongIds.has(song.id)));
      favorite.addEventListener('click', () => {
        if (favoriteSongIds.has(song.id)) favoriteSongIds.delete(song.id);
        else favoriteSongIds.add(song.id);
        saveFavorites(); render();
      });
      actions.append(favorite);
      if (song.url && /^https:\/\//.test(song.url)) {
        const link = node('a', 'song-mv-link', '▶ MV');
        link.href = song.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `在 YouTube 觀看 ${song.title} 官方 MV`);
        actions.append(link);
      }
      row.append(copy, actions);
      list.append(row);
    });
  };
  byId('music-search').addEventListener('input', render);
  select.addEventListener('change', render);
  allButton.addEventListener('click', () => { showFavoritesOnly = false; render(); });
  favoritesButton.addEventListener('click', () => { showFavoritesOnly = true; render(); });
  render();
  byId('song-count').textContent = String(data.songs.length).padStart(2, '0');
}

function renderMemories() {
  const gallery = byId('memory-list');
  gallery.replaceChildren();
  data.memories.forEach((memory, index) => {
    const item = node('article', 'memory-photo-card');
    const link = node('a', 'memory-photo-link');
    if (memory.url && /^https:\/\//.test(memory.url)) {
      link.href = memory.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `觀看 ${memory.artist} ${memory.title} 影像`);
    } else { link.removeAttribute('href'); }
    const picture = node('div', 'memory-image');
    const img = node('img');
    img.src = memory.photo;
    img.alt = memory.photoAlt || `${memory.artist} 舞台照片`;
    img.loading = 'lazy'; img.decoding = 'async';
    img.addEventListener('error', () => { img.remove(); picture.classList.add('no-image'); });
    picture.append(img, node('span', 'memory-photo-num', String(index + 1).padStart(2, '0')));
    const content = node('div', 'memory-photo-text');
    content.append(node('span', 'memory-photo-tag', memory.kind), node('h3', '', memory.title), node('p', '', memory.detail), node('span', 'memory-photo-artist', memory.artist + ' ↗'));
    link.append(picture, content); item.append(link); gallery.append(item);
  });
}
const STORE_KEY = 'kpop-universe-wishlist-v1';
function getWishes() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY));
    if (!Array.isArray(saved)) return [];
    return saved
      .filter(w => w && typeof w.id === 'string' && typeof w.text === 'string' && typeof w.done === 'boolean')
      .slice(0, 300);
  } catch {
    return [];
  }
}

let wishes = getWishes();
function saveWishes() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(wishes));
  } catch {
    byId('wish-summary').textContent = '瀏覽器無法儲存資料';
  }
}

function renderWishes() {
  const list = byId('wish-list');
  list.replaceChildren();
  const complete = wishes.filter(w => w.done).length;
  byId('wish-summary').textContent = `${wishes.length} wishes`;
  byId('wish-completed').textContent = `${complete} completed`;

  if (!wishes.length) {
    list.append(node('li', 'empty-wishes', '還沒有願望 ✧ 寫下你的第一個小心願吧！'));
    return;
  }

  wishes.forEach(wish => {
    const li = node('li', 'wish-item' + (wish.done ? ' done' : ''));
    const cb = node('input');
    cb.type = 'checkbox';
    cb.checked = wish.done;
    cb.setAttribute('aria-label', `標記願望：${wish.text}`);
    cb.addEventListener('change', () => {
      wish.done = cb.checked;
      saveWishes();
      renderWishes();
    });

    const label = node('span', '', wish.text);
    const del = node('button', 'delete-wish', '×');
    del.type = 'button';
    del.setAttribute('aria-label', `刪除願望：${wish.text}`);
    del.addEventListener('click', () => {
      wishes = wishes.filter(x => x.id !== wish.id);
      saveWishes();
      renderWishes();
    });

    li.append(cb, label, del);
    list.append(li);
  });
}

function setupWishes() {
  byId('wish-form').addEventListener('submit', event => {
    event.preventDefault();
    const input = byId('wish-input');
    const value = input.value.trim();
    if (!value) return;
    wishes.unshift({
      id: `w-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      text: value.slice(0, 80),
      done: false,
    });
    saveWishes();
    renderWishes();
    input.value = '';
    input.focus();
  });
  renderWishes();
}

function setupNav() {
  const links = [...document.querySelectorAll('.nav-links a')];
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          const active = link.getAttribute('href') === '#' + entry.target.id;
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-15% 0px -65% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}

renderArtists();
setupMusic();
renderMemories();
setupWishes();
setupNav();
