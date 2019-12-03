import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { getAll } from '../../services/dogService.js';
import { NavLink } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ModalNewDog from '../Modals/ModalNewDog';
import ModalDeleteDog from '../Modals/ModalDeleteDog';
import ModalEditDog from '../Modals/ModalEditDog/index.js';
import ModalDogVaccines from '../Modals/ModalDogVaccines/index.js';

const useStyles = {
    actionButtonWrap: {
        display: 'inline-block',
        marginRight: '8px',
        "&:last-child": {
            marginRight: "0px"
        }
    },
    noDogsFound: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-55px',
        height: '100%',
        "& p": {
            fontSize: '25px'
        }
    },
    loaderWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-55px',
        height: '100%',

    },
    loader: {
        color: 'sienna'
    }
};

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: [],
            isLoading: false,
        }
        this.setHomePageStateHandler = this.setHomePageStateHandler.bind(this)
    }

    setHomePageStateHandler() {
        this.setState({
            dogs: this.loadDogs()
        });
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        this.loadDogs();
    }

    loadDogs = async () => {
        this.setState({ isLoading: true })
        const dogs = await getAll();
        this.setState({ dogs: dogs, isLoading: false })
    }

    renderTableData() {
        const { classes } = this.props;
        const { isLoading } = this.state;

        if (!isLoading) {
            return this.state.dogs.map((dog, index) => {
                const { _id, name, breed, age, listVaccines } = dog;
                return (
                    <tr key={_id}>
                        <td>{name}</td>
                        <td>{breed}</td>
                        <td>{age === 0 ? 'Less than a year old' : age + ' years old'}</td>
                        <td><ModalDogVaccines vaccines={listVaccines} /></td>
                        <td>
                            <span className={classes.actionButtonWrap}>
                                <NavLink to={`/dog/${_id}`}><Fab className="btn-view-circle btn" size="small" aria-label="view"><VisibilityIcon fontSize="small" /></Fab></NavLink>
                            </span>
                            <span className={classes.actionButtonWrap}>
                                <ModalEditDog dog={dog} setHomePageStateHandler={this.setHomePageStateHandler} setHomePageSuccess={this.setHomePageSuccess} />
                            </span>
                            <span className={classes.actionButtonWrap}>
                                <ModalDeleteDog dog={dog} setHomePageStateHandler={this.setHomePageStateHandler} />
                            </span>

                        </td>
                    </tr >
                )
            })
        }
    }

    render() {
        const { classes } = this.props;
        const { isLoading } = this.state;
        let content;

        if (isLoading) {
            content =
                <div className={classes.loaderWrap}>
                    <CircularProgress className={classes.loader} />
                </div>
        } else if (this.state.dogs.length === 0) {
            content =
                <div className={classes.noDogsFound}>
                    <p>No dogs found</p>
                </div>
        } else {
            content =
                <table className="dogs-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Breed</th>
                            <th>Age</th>
                            <th>Vaccines List</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
        }

        return (
            <div className="dogs-table-wrap">
                <div className="dogs-table-title">
                    <h1>Manage Dogs</h1>
                    <ModalNewDog setHomePageStateHandler={this.setHomePageStateHandler} />
                </div>

                {content}

            </div >
        )
    }
}

export default withStyles(useStyles)(HomePage);