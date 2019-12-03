import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = {
    listNumber: {
        marginRight: '25px',
        opacity: '0.8'
    }
};

class ModalDogVaccines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vaccines: this.props.vaccines,
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
                <Button variant="outlined" className="btn-outlined" onClick={this.handleOpen}>
                    View
                </Button>
                <Dialog
                    PaperProps={{
                        style: {
                            width: '100%'
                        },
                    }}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="dog-vaccines-dialog"
                >
                    <DialogTitle>List of Vaccines</DialogTitle>
                    <DialogContent>
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            {this.props.vaccines.map((vaccine, index) => {
                                return (
                                    <ListItem key={index} button>
                                        <span className={classes.listNumber}>{index + 1}</span>
                                        <ListItemText primary={vaccine} />
                                    </ListItem>
                                )
                            })
                            }
                        </List>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(useStyles)(ModalDogVaccines);