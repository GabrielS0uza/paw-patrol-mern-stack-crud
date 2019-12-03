import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { editDog } from '../../../services/dogService.js';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = {
    textField: {
        width: '100%',
        "& label.Mui-focused:not(.Mui-error)": {
            color: 'sienna',
        },
        '& .MuiOutlinedInput-root.Mui-focused:not(.Mui-error) fieldset': {
            borderColor: 'sienna',
        },
    },
    vaccineFieldWrap: {
        position: 'relative'
    },
    btnAddVaccine: {
        background: 'sienna',
        color: '#fff',
        "&:hover": {
            backgroundColor: "sienna"
        },
        "&:disabled": {
            cursor: "not-allowed",
            pointerEvents: "all"
        }
    },
    btnDeleteVaccine: {
        position: 'absolute',
        top: '-3px',
        right: '-16px',
        width: '35px',
        height: '35px',
        minHeight: '35px'
    },
    btnEditDog: {
        background: 'rgb(76, 175, 80)',
        color: '#fff',
        "&:hover": {
            backgroundColor: "rgb(76, 175, 80)"
        }
    },
    modalActionsForm: {
        flex: '0 0 auto',
        display: 'flex',
        padding: '16px 0 4px',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
};

class FormEditDog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dog: {
                name: this.props.dog.name,
                breed: this.props.dog.breed,
                age: this.props.dog.age,
                listVaccines: this.props.dog.listVaccines,
            },
            errors: {
                name: false,
                breed: false,
                age: false
            },
            errorsListVaccines: {},
            isLoading: false,
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    editDog = async () => {
        const response = await editDog(this.props.dog._id, this.state.dog);
        const data = await response.json();

        if (response.ok) {
            this.setState({ success: true })
            this.props.closeEditDogModal();
            this.props.setHomePageStateHandler();
        }

        return data;
    }

    handleChange(e) {
        this.setState({
            dog: {
                ...this.state.dog,
                [e.target.name]: e.target.value,
            }
        });

        if (e.target.value.trim() === '') {
            this.setState({
                hasErrors: true,
                errors: {
                    ...this.state.errors,
                    [e.target.name]: true,
                }
            });
        } else {
            this.setState({
                hasErrors: false,
                errors: {
                    ...this.state.errors,
                    [e.target.name]: false,
                }
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.editDog();
    }

    handleVaccineChange = i => e => {
        const listVaccines = [...this.state.dog.listVaccines];
        listVaccines[i] = e.target.value;
        this.setState({
            dog: {
                ...this.state.dog,
                listVaccines: listVaccines
            }
        });

        if (e.target.value.trim() === '') {
            this.setState({
                errorsListVaccines: {
                    ...this.state.errorsListVaccines,
                    [e.target.name]: true
                }
            });
        } else {
            this.setState({
                errorsListVaccines: {
                    ...this.state.errorsListVaccines,
                    [e.target.name]: false
                }
            });
        }
    }

    handleVaccineDelete = i => e => {
        const listVaccines = this.state.dog.listVaccines;
        listVaccines.splice(i, 1);

        this.setState({
            dog: {
                ...this.state.dog,
                listVaccines: listVaccines
            }
        });

        const listVaccinesErrors = {};

        listVaccines.forEach((vaccine, index) => {
            if (vaccine.trim() === '') {
                listVaccinesErrors[`vaccine${index + 1}`] = true;
            } else {
                listVaccinesErrors[`vaccine${index + 1}`] = false;
            }
        })

        this.setState({
            errorsListVaccines: listVaccinesErrors
        });
    }

    addVaccine = e => {
        const listVaccines = this.state.dog.listVaccines.concat([''])
        this.setState({
            dog: {
                ...this.state.dog,
                listVaccines: listVaccines
            }
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <form id="form-edit-dog" className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField
                        required
                        error={this.state.errors.name}
                        helperText={this.state.errors.name ? 'Required field.' : false}
                        id="outlined-required"
                        label="Name"
                        name="name"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={this.state.dog.name}
                        onChange={this.handleChange}
                        onBlur={this.handleChange}
                    />
                    <TextField
                        required
                        error={this.state.errors.breed}
                        helperText={this.state.errors.breed ? 'Required field.' : false}
                        id="outlined-required"
                        label="Breed"
                        name="breed"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={this.state.dog.breed}
                        onChange={this.handleChange}
                        onBlur={this.handleChange}
                    />
                    <TextField
                        required
                        error={this.state.errors.age}
                        helperText={this.state.errors.age ? 'Required field.' : false}
                        id="outlined-required"
                        label="Age"
                        name="age"
                        className={classes.textField}
                        type="number"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            min: "0",
                        }}
                        value={this.state.dog.age}
                        onChange={this.handleChange}
                        onBlur={this.handleChange}
                    />

                    <Divider className="divider" variant="middle" />
                    <h3>List of Vaccines</h3>

                    {this.state.dog.listVaccines.map((vaccine, index) => (
                        <div className={classes.vaccineFieldWrap} key={index}>
                            <TextField
                                required
                                error={this.state.errorsListVaccines[`vaccine${index + 1}`]}
                                helperText={this.state.errorsListVaccines[`vaccine${index + 1}`] ? 'Required field.' : false}
                                id="outlined-required"
                                label={`Vaccine ${index + 1}`}
                                name={`vaccine${index + 1}`}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={vaccine}
                                onChange={this.handleVaccineChange(index)}
                                onBlur={this.handleVaccineChange(index)}
                            />
                            {this.state.dog.listVaccines.length > 1 ?
                                <Fab onClick={this.handleVaccineDelete(index)} className={`${classes.btnDeleteVaccine} btn-delete-circle btn`} size="small" aria-label="delete">
                                    <DeleteIcon fontSize="small" />
                                </Fab>
                                : null}
                        </div>
                    ))}
                    <Fab className={`${classes.btnAddVaccine} btn`} onClick={this.addVaccine} disabled={!this.state.dog.listVaccines.every(value => value.trim() !== '')} size="small" color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </form>
                <div className={classes.modalActionsForm}>
                    <Button
                        className="btn-cancel btn"
                        onClick={this.props.closeEditDogModal}
                        size="large"
                    >
                        Cancel
                        </Button>
                    <Button
                        disabled={
                            !(Object.values(this.state.errors).every(value => value === false) &&
                                Object.values(this.state.errorsListVaccines).every(value => value === false) &&
                                Object.values(this.state.dog).every(value => value !== '') &&
                                this.state.dog.listVaccines.every(value => value !== ''))
                        }
                        variant="contained"
                        size="large"
                        type="submit"
                        className={`${classes.btnEditDog} btn`}
                        startIcon={<EditIcon />}
                        form="form-edit-dog"
                    >
                        Edit
                        </Button>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(FormEditDog);