import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import FormNewDog from '../../Forms/FormNewDog';
import AddIcon from '@material-ui/icons/Add';

const useStyles = {
    btnNewDog: {
        background: 'rgb(76, 175, 80)',
        color: '#fff',
        "&:hover": {
            backgroundColor: "rgb(76, 175, 80)"
        }
    }
};

class ModalNewDog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({ open: true });
    };

    handleClose() {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    className={`${classes.btnNewDog} btn`}
                    startIcon={<AddIcon />}
                    onClick={this.handleOpen}
                >
                    Add New Dog
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="new-dog-form-dialog">
                    <DialogTitle>New Dog</DialogTitle>
                    <DialogContent>
                        <FormNewDog closeNewDogModal={this.handleClose} setHomePageStateHandler={this.props.setHomePageStateHandler} />
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(useStyles)(ModalNewDog);