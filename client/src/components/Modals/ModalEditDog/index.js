import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import FormEditDog from '../../Forms/FormEditDog';

class ModalEditDog extends Component {
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
        return (
            <div>
                <Fab onClick={this.handleOpen} className="btn-edit-circle btn" size="small" aria-label="edit">
                    <EditIcon fontSize="small" />
                </Fab>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="edit-dog-form-dialog">
                    <DialogTitle>Edit {this.props.dog.name}</DialogTitle>
                    <DialogContent>
                        <FormEditDog dog={this.props.dog} closeEditDogModal={this.handleClose} setHomePageStateHandler={this.props.setHomePageStateHandler} setHomePageSuccess={this.props.setHomePageSuccess} />
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default ModalEditDog;