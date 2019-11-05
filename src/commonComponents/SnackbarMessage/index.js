import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class SnackbarMessage extends React.Component {

  state = {
    open: true,
    vertical: 'top',
    horizontal: 'center',
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { vertical, horizontal, open } = this.state;
    console.log("snackbar")
    return (
      <div>

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">test</span>}
        />
      </div>

    );
  }
}
export default SnackbarMessage;