import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { deleteById } from '../../../services/dogService.js';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

const useStyles = {
    modalActionsForm: {
        flex: '0 0 auto',
        display: 'flex',
        padding: '16px 0 4px',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    btnDeleteDog: {
        background: 'rgb(244, 67, 54)',
        color: '#fff',
        "&:hover": {
            backgroundColor: "rgb(244, 67, 54)"
        },
    }
};

class ModalDeleteDog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idDog: this.props.dog._id,
            open: false,
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleOpen() {
        this.setState({ open: true });
    };

    handleClose() {
        this.setState({ open: false });
    };

    handleDelete() {
        this.deleteDog();
    }

    deleteDog = async () => {
        const response = await deleteById(this.state.idDog);
        const data = await response.json();

        if (response.ok) {
            this.handleClose();
            this.props.setHomePageStateHandler();
        }

        return data;
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Fab onClick={this.handleOpen} className="btn-delete-circle btn" size="small" aria-label="delete">
                    <DeleteIcon fontSize="small" />
                </Fab>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="delete-dog-form-dialog">
                    <DialogTitle>Delete {this.props.dog.name}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Do you really want to deleted this dog? This process cannot be undone.
                         </DialogContentText>
                        <div className={classes.modalActionsForm}>
                            <Button
                                className="btn-cancel btn"
                                onClick={this.handleClose}
                                size="large"
                            >
                                Cancel
                        </Button>
                            <Button
                                className={`${classes.btnDeleteDog} btn`}
                                onClick={this.handleDelete}
                                variant="contained"
                                size="large"
                                startIcon={<DeleteIcon />}
                            >
                                Delete
                        </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(useStyles)(ModalDeleteDog);