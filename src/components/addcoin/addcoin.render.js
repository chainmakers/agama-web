import React from 'react';
import translate from '../../translate/translate';

const AddCoinRender = function() {
  return (
    <div onKeyDown={ (event) => this.handleKeydown(event) }>
      <div className={ `modal modal-3d-sign add-coin-modal ${this.state.modalClassName}` }>
        <div
          onClick={ this.dismiss }
          className="modal-close-overlay"></div>
        <div className="modal-dialog modal-center modal-lg">
          <div
            onClick={ this.dismiss }
            className="modal-close-overlay"></div>
          <div className="modal-content">
            <div className="modal-header bg-orange-a400 wallet-send-header">
              <button
                type="button"
                className="close white"
                onClick={ this.dismiss }>
                <span>×</span>
              </button>
              <h4 className="modal-title white">
                { translate('INDEX.SELECT_A_COIN') }
              </h4>
            </div>
            <div className="modal-body">
              { this.renderCoinSelectors() }
              <div className={ 'text-align-center vertical-margin-20 horizontal-margin-0 padding-bottom-20 ' + (this.hasMoreThanOneCoin() ? 'col-sm-12' : 'hide') }>
                <button
                  type="button"
                  className="btn btn-primary col-sm-4 float-none"
                  onClick={ this.activateAllCoins }>
                  { translate('ADD_COIN.ACTIVATE_ALL') }
                </button>
              </div>
              <div className="col-sm-12">
                <p>
                  <strong>{ translate('INDEX.SPV_MODE') }:</strong> { translate('ADD_COIN.LITE_MODE_DESC') }.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={ 'modal-backdrop ' + (this.state.display ? 'show in' : 'fade hide') }></div>
    </div>
  )
};

export default AddCoinRender;