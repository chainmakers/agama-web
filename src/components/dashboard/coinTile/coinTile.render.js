import React from 'react';
import translate from '../../../translate/translate';
import Config from '../../../config';

const CoinTileRender = function() {
  return (
    <div className={ 'page-aside padding-top-80' + (this.state.toggledSidebar && this.renderSidebarToggle() ? ' open' : '') }>
      { this.renderSidebarToggle() &&
        <div
          onClick={ this.toggleSidebar }
          className="page-aside-switch">
          <i className={ 'icon fa-chevron-' + (this.state.toggledSidebar ? 'left' : 'right') }></i>
        </div>
      }
      <div className="page-aside-inner">
        <div className="wallet-widgets-list">
          <div>
            <div>
              <div className="list-group row wallet-widgets-row">
                { this.renderTiles() }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinTileRender;