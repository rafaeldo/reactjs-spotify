import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

import { Creators as PlaylistActions } from '../../store/ducks/playlists';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })),
    }).isRequired,
  }

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <a href="#">Navegar</a>
            </li>
            <li>
              <a href="#">Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="#">Seu Daily Mix</a>
            </li>
            <li>
              <a href="#">Tocados recentemente</a>
            </li>
            <li>
              <a href="#">Álbuns</a>
            </li>
            <li>
              <a href="#">Artistas</a>
            </li>
            <li>
              <a href="#">Estações</a>
            </li>
            <li>
              <a href="#">Arquivos locais</a>
            </li>
            <li>
              <a href="#">Vídeos</a>
            </li>
            <li>
              <a href="#">Podcasts</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLISTS</span>
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
